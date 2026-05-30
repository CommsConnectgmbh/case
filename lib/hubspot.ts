const HUBSPOT_TOKEN = process.env.HUBSPOT_API_TOKEN;
const BASE_URL = 'https://api.hubapi.com';

async function hubspotFetch(path: string, body: object) {
  return fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export async function createHubSpotContactAndDeal(session: {
  id: string;
  customer_details?: { name?: string | null; email?: string | null; phone?: string | null } | null;
  amount_total?: number | null;
}) {
  const name = session.customer_details?.name || 'Unbekannt';
  const email = session.customer_details?.email || '';
  const phone = session.customer_details?.phone || '';
  const amount = (session.amount_total || 0) / 100;

  // Idempotency: Stripe may redeliver checkout.session.completed. The deal
  // stores the session id in `description` — if a deal already exists for this
  // session, skip to avoid duplicate deals in HubSpot.
  try {
    const dealSearch = await hubspotFetch('/crm/v3/objects/deals/search', {
      filterGroups: [
        {
          filters: [
            { propertyName: 'description', operator: 'EQ', value: `Stripe Session: ${session.id}` },
          ],
        },
      ],
      properties: ['dealname'],
      limit: 1,
    });
    const existing = await dealSearch.json();
    if (existing?.results?.length > 0) return;
  } catch (err) {
    console.error('HubSpot deal dedup check failed (continuing):', err);
  }

  const contactRes = await hubspotFetch('/crm/v3/objects/contacts', {
    properties: {
      firstname: name.split(' ')[0] || name,
      lastname: name.split(' ').slice(1).join(' ') || '',
      email,
      phone,
      hs_lead_status: 'NEW',
    },
  });
  let contactId: string | undefined;
  if (contactRes.ok) {
    const contact = await contactRes.json();
    contactId = contact?.id;
  } else {
    // Contact likely already exists (duplicate email) — look it up so the
    // deal can still be associated instead of created orphaned.
    console.error('HubSpot contact create failed:', contactRes.status, await contactRes.text());
    if (email) {
      const lookup = await hubspotFetch('/crm/v3/objects/contacts/search', {
        filterGroups: [
          { filters: [{ propertyName: 'email', operator: 'EQ', value: email }] },
        ],
        limit: 1,
      });
      const found = await lookup.json().catch(() => null);
      contactId = found?.results?.[0]?.id;
    }
  }

  await hubspotFetch('/crm/v3/objects/deals', {
    properties: {
      dealname: `5G Case Bestellung – ${name}`,
      dealstage: 'closedwon',
      pipeline: 'default',
      amount: amount.toString(),
      closedate: new Date().toISOString(),
      description: `Stripe Session: ${session.id}`,
    },
    associations: contactId
      ? [{ to: { id: contactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }] }]
      : [],
  });
}
