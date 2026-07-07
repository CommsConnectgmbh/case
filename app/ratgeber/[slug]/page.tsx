import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import FloatingCart from '@/components/ui/FloatingCart';
import { articles, getArticle } from '@/lib/ratgeber';

const SITE = 'https://case-connect.de';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${SITE}/ratgeber/${a.slug}`;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: a.metaTitle, description: a.metaDescription, url, type: 'article' },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const url = `${SITE}/ratgeber/${a.slug}`;
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: a.title,
        description: a.metaDescription,
        datePublished: a.datePublished,
        dateModified: a.datePublished,
        inLanguage: 'de-DE',
        author: { '@type': 'Organization', name: 'Comms Connect GmbH' },
        publisher: { '@type': 'Organization', name: 'Comms Connect GmbH', url: SITE },
        mainEntityOfPage: url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Start', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: `${SITE}/ratgeber` },
          { '@type': 'ListItem', position: 3, name: a.title, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: a.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <NavBar />
      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/ratgeber"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={15} /> Alle Ratgeber
          </Link>

          <p className="text-[11px] uppercase tracking-wider text-primary/80 mb-3">
            Ratgeber · {a.readingMinutes} Min. Lesezeit
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">{a.title}</h1>
          <p className="text-lg text-muted/90 leading-relaxed mb-12">{a.lead}</p>

          {a.sections.map((s) => (
            <section key={s.h2} className="mb-10">
              <h2 className="font-heading text-2xl font-bold mb-4">{s.h2}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="text-muted/90 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              {s.bullets && (
                <ul className="space-y-2 mt-2">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-muted/90">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* CTA */}
          <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
            <h2 className="font-heading text-2xl font-bold mb-2">Der Case Connect 5G-Koffer</h2>
            <p className="text-muted mb-6">
              Plug &amp; Play in unter 60 Sekunden online. IP67, akkubetrieben, Multi-SIM, bis 500 m
              WLAN-Reichweite — für Baustelle, Event, BOS, Service und Film.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-full hover:bg-cta/90 transition-colors"
              >
                Zum 5G-Koffer <ArrowRight size={16} />
              </Link>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white font-medium rounded-full hover:border-primary/40 transition-colors"
              >
                Live-Demo anfragen
              </Link>
            </div>
          </div>

          {/* FAQ */}
          {a.faq.length > 0 && (
            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold mb-6">Häufige Fragen</h2>
              <div className="space-y-5">
                {a.faq.map((f) => (
                  <div key={f.q} className="p-5 rounded-xl bg-surface border border-white/[0.06]">
                    <h3 className="font-semibold mb-2">{f.q}</h3>
                    <p className="text-muted/90 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related */}
          <section className="border-t border-white/[0.06] pt-10">
            <h2 className="font-heading text-xl font-bold mb-5">Weiterlesen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/ratgeber/${r.slug}`}
                  className="group p-4 rounded-xl bg-surface border border-white/[0.06] hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors leading-snug">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCart />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
