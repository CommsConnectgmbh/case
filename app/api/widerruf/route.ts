import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * Widerruf-Funktion (Art. 246a § 1 EGBGB / §§ 355, 357 BGB).
 *
 * Gesetzliche Kernpflicht: Der Verbraucher kann seinen Widerruf OHNE Login
 * elektronisch erklären und erhält UNVERZÜGLICH eine Eingangsbestätigung auf
 * einem dauerhaften Datenträger (E-Mail).
 *
 * Umsetzung ohne neue Infrastruktur:
 *  1. Widerruf wird als HubSpot-Kontakt + Note persistiert (gleiche Pipeline wie
 *     das Kontaktformular) -> dauerhafter interner Nachweis, Backoffice sieht ihn.
 *  2. Eingangsbestätigung per E-Mail an den Verbraucher (Resend).
 *
 * Env-gegated: Fehlen HubSpot/Resend-Secrets, scheitert der Build NICHT und der
 * Endpoint antwortet trotzdem sauber (Nutzer wird im Zweifel auf den formlosen
 * E-Mail-Widerruf verwiesen). Beide Wege sind rechtlich gleichwertig.
 */

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
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

const FROM = process.env.WIDERRUF_FROM || 'Comms Connect GmbH <info@case-connect.de>';
const NOTIFY = process.env.WIDERRUF_NOTIFY || 'info@case-connect.de';

function makeRef() {
  return Math.random().toString(36).slice(2, 6).toUpperCase() + Date.now().toString(36).slice(-4).toUpperCase();
}

async function recordInHubSpot(d: {
  name: string;
  email: string;
  contractRef: string;
  contractDate: string;
  reason: string;
  ref: string;
}) {
  const token = process.env.HUBSPOT_API_TOKEN;
  if (!token) return;
  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

  const [firstname, ...rest] = d.name.trim().split(' ');
  const lastname = rest.join(' ') || '';

  let contactId: string | undefined;
  const contactRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      properties: { firstname, lastname, email: d.email, hs_lead_status: 'OPEN' },
    }),
  });
  if (contactRes.ok) {
    contactId = (await contactRes.json())?.id;
  } else {
    const lookup = await fetch('https://api.hubapi.com/crm/v3/objects/contacts/search', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: d.email }] }],
        limit: 1,
      }),
    });
    contactId = (await lookup.json().catch(() => null))?.results?.[0]?.id;
  }

  const body = [
    `WIDERRUF eingegangen (Vorgang ${d.ref})`,
    ``,
    `Name: ${d.name}`,
    `E-Mail: ${d.email}`,
    `Bestell-/Kundennummer: ${d.contractRef || '—'}`,
    `Datum Vertragsschluss: ${d.contractDate || '—'}`,
    `Grund (freiwillig): ${d.reason || '—'}`,
  ].join('\n');

  await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      properties: { hs_timestamp: Date.now(), hs_note_body: body },
      associations: contactId
        ? [{ to: { id: contactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }] }]
        : [],
    }),
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, contractRef, contractDate, reason, company } = await req.json();

    // Honeypot
    if (company) return NextResponse.json({ ok: true, ref: makeRef() });

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Bitte geben Sie Ihren Namen an.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }, { status: 400 });
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Zu viele Anfragen. Bitte später erneut versuchen.' }, { status: 429 });
    }

    const ref = makeRef();
    const data = {
      name: String(name).trim(),
      email: String(email).trim(),
      contractRef: String(contractRef || '').trim(),
      contractDate: String(contractDate || '').trim(),
      reason: String(reason || '').trim(),
      ref,
    };

    // 1) Dauerhafter interner Nachweis (best effort — Mailbestätigung ist die Pflicht).
    try {
      await recordInHubSpot(data);
    } catch (err) {
      console.error('Widerruf HubSpot record failed (continuing):', err);
    }

    // 2) Eingangsbestätigung auf dauerhaftem Datenträger an den Verbraucher.
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const text = [
        `Hallo ${data.name},`,
        ``,
        `wir bestätigen den Eingang Ihres Widerrufs.`,
        ``,
        `Vorgangsnummer: ${data.ref}`,
        data.contractRef ? `Bestell-/Kundennummer: ${data.contractRef}` : '',
        data.contractDate ? `Datum des Vertragsschlusses: ${data.contractDate}` : '',
        ``,
        `Ihr Widerruf gilt damit als fristgerecht erklärt. Bereits geleistete Zahlungen`,
        `erstatten wir unverzüglich, spätestens binnen 14 Tagen, über das ursprünglich`,
        `genutzte Zahlungsmittel.`,
        ``,
        `Diese E-Mail ist Ihre Eingangsbestätigung auf einem dauerhaften Datenträger.`,
        ``,
        `Comms Connect GmbH`,
        `Tal 30, 80331 München`,
      ]
        .filter((l) => l !== '')
        .join('\n');

      try {
        await resend.emails.send({
          from: FROM,
          to: data.email,
          subject: `Eingangsbestätigung Ihres Widerrufs (${data.ref}) – 5G Case`,
          text,
        });
        await resend.emails.send({
          from: FROM,
          to: NOTIFY,
          subject: `Neuer Widerruf ${data.ref} – case-connect.de`,
          text: `Name: ${data.name}\nE-Mail: ${data.email}\nBestellnr.: ${data.contractRef || '—'}\nDatum: ${data.contractDate || '—'}\nGrund: ${data.reason || '—'}`,
        });
      } catch (err) {
        // Bestätigungs-Mail fehlgeschlagen: Nutzer bekommt trotzdem ok + Vorgangsnummer,
        // der Eingang ist intern erfasst. Wir leiten ihn zusätzlich auf den E-Mail-Weg.
        console.error('Widerruf confirmation mail failed:', err);
        return NextResponse.json({
          ok: true,
          ref: data.ref,
          mailFailed: true,
        });
      }
    }

    return NextResponse.json({ ok: true, ref: data.ref, mailFailed: !resendKey });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unbekannter Fehler';
    console.error('Widerruf error:', msg);
    return NextResponse.json({ error: 'Verarbeitung fehlgeschlagen. Bitte widerrufen Sie alternativ per E-Mail an info@comms-connect.de.' }, { status: 500 });
  }
}
