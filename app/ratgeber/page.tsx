import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import FloatingCart from '@/components/ui/FloatingCart';
import { articles } from '@/lib/ratgeber';

const SITE = 'https://case-connect.de';

export const metadata: Metadata = {
  title: 'Ratgeber: 5G-Koffer & mobiles Internet',
  description:
    'Praxis-Ratgeber rund um den 5G-Koffer: mobiles Internet für Baustelle, Event, BOS, Service und Film — mieten oder kaufen, Technik erklärt, Kaufkriterien.',
  alternates: { canonical: `${SITE}/ratgeber` },
  openGraph: {
    title: 'Ratgeber: 5G-Koffer & mobiles Internet',
    description: 'Mobiles Internet für Baustelle, Event, BOS, Service und Film — verständlich erklärt.',
    url: `${SITE}/ratgeber`,
  },
};

export default function RatgeberHub() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ratgeber: 5G-Koffer & mobiles Internet',
    url: `${SITE}/ratgeber`,
    hasPart: articles.map((a) => ({
      '@type': 'Article',
      headline: a.title,
      url: `${SITE}/ratgeber/${a.slug}`,
    })),
  };

  return (
    <>
      <NavBar />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
            <BookOpen size={14} /> Ratgeber
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            5G-Koffer & mobiles Internet — verständlich erklärt
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-12">
            Wann lohnt sich mieten statt kaufen? Wie funktioniert ein Internetkoffer? Worauf kommt es
            für Baustelle, Event, BOS, Service und Film an? Hier sind die Antworten aus der Praxis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/ratgeber/${a.slug}`}
                className="group p-6 rounded-2xl bg-surface border border-white/[0.06] hover:border-primary/30 transition-colors"
              >
                <p className="text-[11px] uppercase tracking-wider text-primary/80 mb-2">
                  {a.keyword} · {a.readingMinutes} Min.
                </p>
                <h2 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {a.title}
                </h2>
                <p className="text-muted text-[15px] leading-relaxed mb-4">{a.teaser}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                  Lesen <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center">
            <h2 className="font-heading text-2xl font-bold mb-2">Bereit für eigenes Netz?</h2>
            <p className="text-muted mb-6 max-w-lg mx-auto">
              Der Case Connect 5G-Koffer ist in unter 60 Sekunden online — IP67, akkubetrieben, bis 500 m Reichweite.
            </p>
            <Link
              href="/#shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-full hover:bg-cta/90 transition-colors"
            >
              Zum 5G-Koffer <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCart />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
