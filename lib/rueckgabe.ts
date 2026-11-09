import { SITE_URL } from '@/lib/seo';

// Rueckgabe nach der Widerrufsbelehrung (app/widerrufsbelehrung): 14 Tage,
// Ruecksendung per Post, unmittelbare Kosten der Ruecksendung traegt der
// Kunde. Land nur DE: /versand nennt DE, AT, CH, der Stripe-Checkout erlaubt
// die EU ohne CH; belegt fuer beide ist nur DE. shippingDetails fehlt bewusst:
// Versandkosten und Lieferzeit sind nirgends verbindlich angegeben (Stand 09.11.2026).
export const RUECKGABE = {
  '@type': 'MerchantReturnPolicy',
  applicableCountry: 'DE',
  returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
  merchantReturnDays: 14,
  returnMethod: 'https://schema.org/ReturnByMail',
  returnFees: 'https://schema.org/ReturnFeesCustomerResponsibility',
  merchantReturnLink: `${SITE_URL}/widerrufsbelehrung`,
} as const;
