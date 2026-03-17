'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
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
        setForm({ name: '', email: '', phone: '', message: '' });
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              required
              placeholder={t.contact.name}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-muted/50 focus:border-primary/50 focus:outline-none transition-colors"
            />
            <input
              type="email"
              required
              placeholder={t.contact.email}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-muted/50 focus:border-primary/50 focus:outline-none transition-colors"
            />
          </div>
          <input
            type="tel"
            placeholder={t.contact.phone}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-muted/50 focus:border-primary/50 focus:outline-none transition-colors"
          />
          <textarea
            required
            rows={5}
            placeholder={t.contact.message}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-muted/50 focus:border-primary/50 focus:outline-none transition-colors resize-none"
          />

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

          {status === 'sent' && (
            <p className="text-primary text-center text-sm">{t.contact.success}</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center text-sm">{t.contact.error}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
