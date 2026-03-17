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

  const contactRes = await hubspotFetch('/crm/v3/objects/contacts', {
    properties: {
      firstname: name.split(' ')[0] || name,
      lastname: name.split(' ').slice(1).join(' ') || '',
      email,
      phone,
      hs_lead_status: 'NEW',
    },
  });
  const contact = await contactRes.json();
  const contactId = contact.id;

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
