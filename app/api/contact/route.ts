import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
    }

    // Create HubSpot contact
    const hubspotToken = process.env.HUBSPOT_API_TOKEN;
    if (hubspotToken) {
      const [firstname, ...rest] = name.split(' ');
      const lastname = rest.join(' ') || '';

      await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
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
            notes_last_updated: message,
          },
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unbekannter Fehler';
    console.error('Contact form error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
