'use client';

import { openCookieSettings } from '@/components/ui/CookieConsent';

/** Footer-Button, der das Cookie-Banner erneut öffnet (auf Server-Komponenten nutzbar). */
export default function CookieSettingsLink({
  className,
  label = 'Cookie-Einstellungen',
}: {
  className?: string;
  label?: string;
}) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {label}
    </button>
  );
}
