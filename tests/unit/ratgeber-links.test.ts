import { describe, expect, it } from 'vitest';
import { articles } from '@/lib/ratgeber';
import { ratgeberLinks } from '@/lib/ratgeber-links';

describe('Ratgeber-Links im Footer', () => {
  it('decken genau die Artikel ab, in derselben Reihenfolge', () => {
    expect(ratgeberLinks.map((l) => l.slug)).toEqual(articles.map((a) => a.slug));
  });
  it('haben kurze, nicht leere Linktexte ohne Gedankenstrich', () => {
    for (const l of ratgeberLinks) {
      expect(l.label.length).toBeGreaterThan(0);
      expect(l.label.length).toBeLessThanOrEqual(40);
      expect(l.label).not.toMatch(/[\u2013\u2014]/);
    }
  });
});
