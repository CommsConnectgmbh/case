'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const t = useTranslation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', message: '', company: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="kontakt" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-4"
        >
          {t.contact.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted text-center mb-12 max-w-lg mx-auto"
        >
          {t.contact.subline}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="space-y-5"
        >
          {/* Honeypot — hidden from humans, catches bots. Must stay empty. */}
          <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="contact-company">Firma (bitte leer lassen)</label>
            <input
              id="contact-company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="text-xs font-medium text-muted uppercase tracking-wider px-1"
              >
                {t.contact.name}
                <span aria-hidden="true" className="text-primary ml-1">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                aria-required="true"
                placeholder={t.contact.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-muted/50 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-xs font-medium text-muted uppercase tracking-wider px-1"
              >
                {t.contact.email}
                <span aria-hidden="true" className="text-primary ml-1">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-required="true"
                placeholder={t.contact.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-muted/50 focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-phone"
              className="text-xs font-medium text-muted uppercase tracking-wider px-1"
            >
              {t.contact.phone}
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={t.contact.phone}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-muted/50 focus:border-primary/50 focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-message"
              className="text-xs font-medium text-muted uppercase tracking-wider px-1"
            >
              {t.contact.message}
              <span aria-hidden="true" className="text-primary ml-1">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              aria-required="true"
              placeholder={t.contact.message}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-muted/50 focus:border-primary/50 focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3.5 bg-cta text-white font-semibold rounded-xl hover:bg-cta/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === 'sending' ? '...' : (
              <>
                <Send size={16} />
                {t.contact.send}
              </>
            )}
          </button>

          <AnimatePresence mode="wait">
            {status === 'sent' && (
              <motion.p
                key="sent"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                role="status"
                aria-live="polite"
                className="text-primary text-center text-sm"
              >
                {t.contact.success}
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                role="alert"
                aria-live="assertive"
                className="text-red-400 text-center text-sm"
              >
                {t.contact.error}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
