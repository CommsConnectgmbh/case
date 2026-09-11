'use client';

/**
 * Widerruf-Formular (Client). Öffentlich, ohne Login erreichbar.
 * Sendet an /api/widerruf, zeigt nach Absenden die sichtbare Eingangsbestätigung
 * mit Vorgangsnummer. Design: cyan/glass im case-connect-Stil.
 */

import { useState } from 'react';

type Result =
  | { ok: true; ref: string; mailFailed?: boolean }
  | { ok: false; error: string };

export default function WiderrufForm() {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setResult(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      contractRef: fd.get('contractRef'),
      contractDate: fd.get('contractDate'),
      reason: fd.get('reason'),
      company: fd.get('company'), // Honeypot
    };

    try {
      const res = await fetch('/api/widerruf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data?.ok) {
        setResult({ ok: true, ref: data.ref, mailFailed: data.mailFailed });
      } else {
        setResult({ ok: false, error: data?.error || 'Es ist ein Fehler aufgetreten.' });
      }
    } catch {
      setResult({ ok: false, error: 'Netzwerkfehler. Bitte später erneut versuchen.' });
    } finally {
      setPending(false);
    }
  }

  if (result?.ok) {
    return (
      <div className="glass rounded-2xl p-6">
        <h2 className="font-heading text-lg font-semibold text-primary">Widerruf eingegangen</h2>
        <p className="mt-2 text-sm text-white/85">
          Ihre Vorgangsnummer: <span className="font-mono font-semibold">{result.ref}</span>
        </p>
        <p className="mt-2 text-sm text-muted/90">
          {result.mailFailed
            ? 'Ihr Widerruf wurde erfasst. Sollten Sie keine Bestätigungs-E-Mail erhalten, gilt Ihr Widerruf dennoch als fristgerecht erklärt – wir melden uns. Sie können den Widerruf zusätzlich formlos per E-Mail an info@comms-connect.de bestätigen.'
            : 'Wir haben Ihnen eine Eingangsbestätigung per E-Mail geschickt. Ihr Widerruf gilt damit als fristgerecht erklärt.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6">
      {/* Honeypot — für Menschen unsichtbar */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <Field label="Name" name="name" required autoComplete="name" />
      <Field label="E-Mail" name="email" type="email" required autoComplete="email" />
      <Field
        label="Bestell-/Kunden-/Rechnungsnummer"
        name="contractRef"
        hint="Hilft uns, Ihren Vertrag schneller zuzuordnen (optional)."
      />
      <Field label="Datum des Vertragsschlusses" name="contractDate" type="date" />

      <div>
        <label className="block text-sm font-medium text-white/85">
          Grund <span className="text-muted/60">(freiwillig)</span>
        </label>
        <textarea
          name="reason"
          rows={3}
          className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-primary/50"
        />
        <p className="mt-1 text-xs text-muted/60">Eine Begründung ist gesetzlich nicht erforderlich.</p>
      </div>

      {result && !result.ok && (
        <p className="text-sm text-cta" role="alert">
          {result.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {pending ? 'Wird gesendet…' : 'Vertrag jetzt widerrufen'}
      </button>

      <p className="text-xs text-muted/60">
        Mit dem Absenden erklären Sie den Widerruf Ihres Vertrags. Sie erhalten unverzüglich eine
        Eingangsbestätigung per E-Mail.
      </p>
    </form>
  );
}

function Field(props: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/85">
        {props.label} {props.required && <span className="text-muted/60">*</span>}
      </label>
      <input
        name={props.name}
        type={props.type ?? 'text'}
        required={props.required}
        autoComplete={props.autoComplete}
        className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-primary/50"
      />
      {props.hint && <p className="mt-1 text-xs text-muted/60">{props.hint}</p>}
    </div>
  );
}
