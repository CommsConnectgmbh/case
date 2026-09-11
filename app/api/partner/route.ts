import { NextResponse } from 'next/server';

// --- Simple in-memory IP rate limit (per server instance) ---------------
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HUBSPOT = 'https://api.hubapi.com';

async function attachPartnerNote(token: string, contactId: string, body: string) {
  await fetch(`${HUBSPOT}/crm/v3/objects/notes`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      properties: { hs_timestamp: Date.now(), hs_note_body: body },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }], // note → contact
        },
      ],
    }),
  });
}

export async function POST(req: Request) {
  try {
    const { name, firma, email, phone, partnertyp, branche, website } = await req.json();

    // Honeypot: real users never fill the hidden "website" field.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !firma || !email) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
    }
    if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 });
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte später erneut versuchen.' },
        { status: 429 }
      );
    }

    const token = process.env.HUBSPOT_API_TOKEN;
    if (token) {
      const [firstname, ...rest] = String(name).trim().split(' ');
      const lastname = rest.join(' ') || '';
      const noteBody =
        `Partnerprogramm-Anmeldung (case-connect.de/partner)\n\n` +
        `Firma: ${firma}\n` +
        `Partnertyp: ${partnertyp || '—'}\n` +
        `Branche/Zielkunden: ${branche || '—'}\n` +
        `Telefon: ${phone || '—'}`;

      const contactRes = await fetch(`${HUBSPOT}/crm/v3/objects/contacts`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          properties: {
            firstname,
            lastname,
            email,
            phone: phone || '',
            company: String(firma),
            hs_lead_status: 'NEW',
            message: noteBody,
          },
        }),
      });

      if (contactRes.ok) {
        const contact = await contactRes.json().catch(() => null);
        if (contact?.id) await attachPartnerNote(token, contact.id, noteBody);
      } else {
        // Duplicate email etc. — look up and attach the note so it is never lost.
        const errBody = await contactRes.text();
        console.error('HubSpot partner contact create failed:', contactRes.status, errBody);
        const lookup = await fetch(`${HUBSPOT}/crm/v3/objects/contacts/search`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }],
            limit: 1,
          }),
        });
        const found = await lookup.json().catch(() => null);
        const contactId = found?.results?.[0]?.id;
        if (contactId) await attachPartnerNote(token, contactId, noteBody);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unbekannter Fehler';
    console.error('Partner form error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
