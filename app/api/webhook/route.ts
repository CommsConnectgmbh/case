import { stripe } from '@/lib/stripe';
import { createHubSpotContactAndDeal } from '@/lib/hubspot';
import type Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return new Response('Webhook signature verification failed', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    await createHubSpotContactAndDeal(session);
  }

  return new Response('OK', { status: 200 });
}
