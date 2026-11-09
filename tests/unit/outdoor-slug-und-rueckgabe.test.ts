import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import nextConfig from '@/next.config.mjs';
import { articles } from '@/lib/ratgeber';
import { RUECKGABE } from '@/lib/rueckgabe';

const ROOT = join(__dirname, '../..');
const lies = (p: string) => readFileSync(join(ROOT, p), 'utf8');

describe('Ratgeber-Slug ohne IP67', () => {
  it('kein Artikel-Slug, Titel oder Meta-Titel nennt IP67', () => {
    for (const a of articles) {
      expect(a.slug, a.slug).not.toMatch(/ip\s*-?6\d/i);
      expect(a.title, a.slug).not.toMatch(/IP\s*6\d/);
      expect(a.metaTitle, a.slug).not.toMatch(/IP\s*6\d/);
    }
    expect(articles.some((a) => a.slug === 'outdoor-5g-koffer')).toBe(true);
  });

  it('alter Slug leitet dauerhaft (308) auf den neuen', async () => {
    const redirects = await nextConfig.redirects!();
    const r = redirects.find((x) => x.source === '/ratgeber/ip67-5g-koffer-outdoor');
    expect(r).toEqual({
      source: '/ratgeber/ip67-5g-koffer-outdoor',
      destination: '/ratgeber/outdoor-5g-koffer',
      permanent: true,
    });
    // Ziel muss ein existierender Artikel sein, sonst endet der Redirect in einer 404.
    const slug = r!.destination.replace('/ratgeber/', '');
    expect(articles.map((a) => a.slug)).toContain(slug);
  });

  it('der Artikel stellt klar, dass das fertige Gerät keine IP-Schutzart hat', () => {
    const a = articles.find((x) => x.slug === 'outdoor-5g-koffer')!;
    const text = a.sections.flatMap((s) => s.p).join(' ');
    expect(text).toMatch(/keine IP-Zertifizierung als Gesamtsystem/);
  });
});

describe('Rückgabe im Product-Schema entspricht den Rechtstexten', () => {
  const widerruf = lies('app/widerrufsbelehrung/page.tsx').replace(/\s+/g, ' ');

  it('14 Tage, Rücksendung, Kosten beim Kunden, wie in der Widerrufsbelehrung', () => {
    expect(RUECKGABE.merchantReturnDays).toBe(14);
    expect(widerruf).toContain('binnen vierzehn Tagen ohne Angabe von Gründen');
    expect(RUECKGABE.returnMethod).toBe('https://schema.org/ReturnByMail');
    expect(widerruf).toContain('an uns zurückzusenden');
    expect(RUECKGABE.returnFees).toBe('https://schema.org/ReturnFeesCustomerResponsibility');
    expect(widerruf).toContain('Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.');
    expect(RUECKGABE.merchantReturnLink).toBe('https://case-connect.de/widerrufsbelehrung');
  });

  it('Land nur, wenn Versandseite UND Checkout es führen', () => {
    const versand = lies('app/versand/page.tsx').replace(/\s+/g, ' ');
    const checkout = lies('app/api/checkout/route.ts');
    expect(RUECKGABE.applicableCountry).toBe('DE');
    expect(versand).toContain('innerhalb Deutschlands');
    expect(checkout).toMatch(/allowed_countries:\s*\[\s*'DE'/);
  });

  it('Startseite bindet die Rückgabe an das Angebot', () => {
    const page = lies('app/page.tsx');
    expect(page).toMatch(/hasMerchantReturnPolicy:\s*RUECKGABE/);
  });
});
