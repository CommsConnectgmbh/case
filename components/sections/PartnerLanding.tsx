'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Send, Handshake, Repeat, PackageCheck, Headset, ArrowRight } from 'lucide-react';

const AUDIENCE = [
  'IT-Systemhäuser & Integratoren',
  'Vermieter (Event- & Baustellentechnik)',
  'Werkzeug- & Arbeitsschutz-Fachhandel',
  'BOS- & Einsatztechnik-Ausstatter',
  'Vermittler & Tippgeber',
];

const VALUE = [
  {
    icon: Handshake,
    title: 'Feste Pauschale je Koffer',
    text: 'Keine Prozente, kein Rechnen. Für jeden vermittelten Koffer eine klare, feste Vergütung.',
  },
  {
    icon: Repeat,
    title: 'Verdien doppelt',
    text: 'Empfiehl weitere Partner und verdien an deren vermittelten Koffern zusätzlich mit.',
  },
  {
    icon: PackageCheck,
    title: 'Gefragtes Produkt, fertig konfektioniert',
    text: 'Plug & Play 5G-Koffer für Baustelle, Event, BOS und Film — du musst nichts entwickeln.',
  },
  {
    icon: Headset,
    title: 'Alles gestellt',
    text: 'Demo-Koffer, Material, eigenes Partner-Cockpit und ein persönlicher Ansprechpartner.',
  },
];

const STEPS = [
  { n: '01', title: 'Anmelden', text: 'Kostenlos und unverbindlich — in zwei Minuten.' },
  { n: '02', title: 'Anbieten', text: 'Mit unserem Material und auf Wunsch einem Demo-Koffer.' },
  { n: '03', title: 'Verdienen', text: 'Wir ordnen jeden Abschluss zu und zahlen zuverlässig aus.' },
];

const PARTNER_TYPES = [
  'Wiederverkäufer / Systemhaus',
  'Vermieter (Event / Baustelle)',
  'Fachhandel',
  'Vermittler / Tippgeber',
  'Sonstiges',
];

export default function PartnerLanding() {
  const [form, setForm] = useState({
    name: '',
    firma: '',
    email: '',
    phone: '',
    partnertyp: '',
    branche: '',
    website: '', // honeypot
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', firma: '', email: '', phone: '', partnertyp: '', branche: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-muted/50 focus:border-primary/50 focus:outline-none transition-colors';
  const labelCls = 'text-xs font-medium text-muted uppercase tracking-wider px-1';

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,196,255,0.10),transparent_60%)]" />
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-primary mb-5"
          >
            Partnerprogramm
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Werde Case-Connect-Partner.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg max-w-xl mx-auto mb-10"
          >
            Verdien an jedem 5G-Koffer, den du vermittelst — feste Pauschale je Koffer,
            keine Prozente, kein Rechnen.
          </motion.p>
          <motion.a
            href="#partner-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-cta text-white font-semibold rounded-full hover:bg-cta/90 transition-colors"
          >
            Partner werden
            <ArrowRight size={17} />
          </motion.a>
        </div>
      </section>

      {/* Für wen */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Für wen sich das lohnt</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {AUDIENCE.map((a) => (
              <span
                key={a}
                className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-muted"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VALUE.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-surface border border-white/[0.06]"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1.5">{title}</h3>
              <p className="text-muted text-[15px] leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* So läuft's */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">So läuft&apos;s</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map(({ n, title, text }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <span className="font-heading text-3xl font-bold text-primary/40">{n}</span>
                <h3 className="font-heading text-lg font-semibold mt-2 mb-1.5">{title}</h3>
                <p className="text-muted text-[15px]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="partner-form" className="px-6 py-20 scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">Jetzt Partner werden</h2>
          <p className="text-muted text-center mb-10 max-w-lg mx-auto">
            Trag dich ein — deine Konditionen bekommst du direkt nach der Anmeldung.
            Kostenlos, keine Bindung.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot */}
            <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="partner-website">Website (bitte leer lassen)</label>
              <input
                id="partner-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="partner-name" className={labelCls}>
                  Name<span aria-hidden="true" className="text-primary ml-1">*</span>
                </label>
                <input
                  id="partner-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Vor- und Nachname"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="partner-firma" className={labelCls}>
                  Firma<span aria-hidden="true" className="text-primary ml-1">*</span>
                </label>
                <input
                  id="partner-firma"
                  name="firma"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="Unternehmen"
                  value={form.firma}
                  onChange={(e) => setForm({ ...form, firma: e.target.value })}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="partner-email" className={labelCls}>
                  E-Mail<span aria-hidden="true" className="text-primary ml-1">*</span>
                </label>
                <input
                  id="partner-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="dein@unternehmen.de"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="partner-phone" className={labelCls}>Telefon</label>
                <input
                  id="partner-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="optional"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="partner-typ" className={labelCls}>Partnertyp</label>
              <select
                id="partner-typ"
                name="partnertyp"
                value={form.partnertyp}
                onChange={(e) => setForm({ ...form, partnertyp: e.target.value })}
                className={`${inputCls} appearance-none`}
              >
                <option value="" className="bg-surface">Bitte wählen …</option>
                {PARTNER_TYPES.map((p) => (
                  <option key={p} value={p} className="bg-surface">{p}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="partner-branche" className={labelCls}>Branche / Zielkunden</label>
              <input
                id="partner-branche"
                name="branche"
                type="text"
                placeholder="optional — z. B. Eventtechnik, Baustellen-IT, BOS"
                value={form.branche}
                onChange={(e) => setForm({ ...form, branche: e.target.value })}
                className={inputCls}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 bg-cta text-white font-semibold rounded-xl hover:bg-cta/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? '…' : (<><Send size={16} /> Partner-Cockpit anfordern</>)}
            </button>

            <AnimatePresence mode="wait">
              {status === 'sent' && (
                <motion.p
                  key="sent"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  role="status"
                  aria-live="polite"
                  className="text-primary text-center text-sm"
                >
                  Danke! Wir melden uns in Kürze mit deinen Partner-Konditionen.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  role="alert"
                  aria-live="assertive"
                  className="text-red-400 text-center text-sm"
                >
                  Etwas ist schiefgelaufen. Bitte versuch es erneut oder schreib an info@case-connect.de.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>
    </main>
  );
}
