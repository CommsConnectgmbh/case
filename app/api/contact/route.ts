import { NextResponse } from 'next/server';

// --- Simple in-memory IP rate limit (per server instance) ---------------
// Good enough to blunt bot bursts without external infra. Resets on deploy.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  // Opportunistic cleanup so the map cannot grow unbounded.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, company } = await req.json();

    // Honeypot: real users never fill the hidden "company" field.
    // Bots that auto-complete every input do — silently accept and drop.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
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

    // Create HubSpot contact
    const hubspotToken = process.env.HUBSPOT_API_TOKEN;
    if (hubspotToken) {
      const [firstname, ...rest] = String(name).trim().split(' ');
      const lastname = rest.join(' ') || '';

      const contactRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${hubspotToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: {
            firstname,
            lastname,
            email,
            phone: phone || '',
            hs_lead_status: 'NEW',
            // `message` is a standard HubSpot contact property (multi-line text)
            // used by HubSpot's own forms — the correct place for free text.
            message: String(message),
          },
        }),
      });

      // If HubSpot rejects (e.g. duplicate email), associate a note so the
      // message is never silently lost.
      if (!contactRes.ok) {
        const errBody = await contactRes.text();
        console.error('HubSpot contact create failed:', contactRes.status, errBody);

        const lookup = await fetch(
          'https://api.hubapi.com/crm/v3/objects/contacts/search',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${hubspotToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              filterGroups: [
                {
                  filters: [
                    { propertyName: 'email', operator: 'EQ', value: email },
                  ],
                },
              ],
              limit: 1,
            }),
          }
        );
        const found = await lookup.json().catch(() => null);
        const contactId = found?.results?.[0]?.id;

        if (contactId) {
          await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${hubspotToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              properties: {
                hs_timestamp: Date.now(),
                hs_note_body: `Kontaktformular case-connect.de:\n\n${String(message)}\n\nTelefon: ${phone || '—'}`,
              },
              associations: [
                {
                  to: { id: contactId },
                  types: [
                    {
                      associationCategory: 'HUBSPOT_DEFINED',
                      associationTypeId: 202, // note → contact
                    },
                  ],
                },
              ],
            }),
          });
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unbekannter Fehler';
    console.error('Contact form error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
