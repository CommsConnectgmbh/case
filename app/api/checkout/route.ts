import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

const PRICE_MAP: Record<string, string | undefined> = {
  'case-standard': process.env.STRIPE_PRICE_5G_STANDARD,
  'case-professional': process.env.STRIPE_PRICE_5G_PROFESSIONAL,
  'addon-einhell-kit': process.env.STRIPE_PRICE_EINHELL_KIT,
  'adapter-bosch': process.env.STRIPE_PRICE_ADAPTER_BOSCH,
  'adapter-dewalt': process.env.STRIPE_PRICE_ADAPTER_DEWALT,
  'adapter-festool': process.env.STRIPE_PRICE_ADAPTER_FESTOOL,
  'adapter-makita': process.env.STRIPE_PRICE_ADAPTER_MAKITA,
  'adapter-metabo': process.env.STRIPE_PRICE_ADAPTER_METABO,
  'adapter-einhell': process.env.STRIPE_PRICE_ADAPTER_EINHELL,
  'adapter-flex': process.env.STRIPE_PRICE_ADAPTER_FLEX,
};

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Keine Artikel im Warenkorb.' },
        { status: 400 }
      );
    }

    const line_items = items.map((item: { productId: string; quantity: number }) => {
      const priceId = PRICE_MAP[item.productId];
      if (!priceId) {
        throw new Error(`Unbekanntes Produkt: ${item.productId}`);
      }
      return { price: priceId, quantity: item.quantity };
    });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: [
          'DE', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI',
          'FR', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
          'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
        ],
      },
      customer_creation: 'always',
      invoice_creation: {
        enabled: true,
        invoice_data: {
          footer: 'Comms Connect GmbH · Tal 30 · 80331 München · GF: Rainer Roloff',
          custom_fields: [
            { name: 'Ansprechpartner', value: 'Rainer Roloff' },
            { name: 'Telefon', value: '+49 89 4522 1556' },
            { name: 'Website', value: 'www.comms-connect.de' },
          ],
          rendering_options: {
            amount_tax_display: 'include_inclusive_tax',
          },
        },
      },
      payment_method_types: ['card'],
      locale: 'de',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#shop`,
      metadata: {
        source: '5g-case-shop',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unbekannter Fehler';
    console.error('Checkout error:', message);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
