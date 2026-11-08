'use client';

import type { ReactNode } from 'react';

import { trackZiel } from '@/lib/consent/tags';
import { tuerHref, type Ziel } from '@/lib/tuer';

/**
 * Link ueber die Klick-Tuer /start. Sieht aus wie ein gewoehnlicher Link;
 * beim Klick geht (nur mit Einwilligung) das passende Conversion-Ereignis raus.
 * Bewusst <a> statt next/link: die Tuer ist eine Weiterleitung, keine Seite,
 * und soll weder vorgeladen noch clientseitig aufgeloest werden.
 */
export default function TuerLink({
  ziel,
  className,
  children,
}: {
  ziel: Ziel;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={tuerHref(ziel)} className={className} onClick={() => trackZiel(ziel)}>
      {children}
    </a>
  );
}
