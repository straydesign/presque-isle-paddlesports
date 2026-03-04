import type { Metadata } from 'next';
import { Gift } from 'lucide-react';
import { giftCardAmounts } from '@/data/gift-cards';

export const metadata: Metadata = {
  title: 'Gift Cards',
  description:
    'Give the gift of adventure — Presque Isle Paddlesports gift cards available in $25, $50, and $100 denominations.',
};

export default function GiftCardsPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Gift className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-bold mb-4">Gift Cards</h1>
          <p className="text-xl">Give the gift of adventure on the water</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Why Gift Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why a gift card?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-bold mb-2">Perfect for anyone</h3>
              <p className="text-sm text-muted-foreground">Works for rentals, tours, and specials. No experience needed to enjoy.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-bold mb-2">Never expires</h3>
              <p className="text-sm text-muted-foreground">Use it this summer or next — your gift card is always good.</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="font-bold mb-2">Unforgettable experience</h3>
              <p className="text-sm text-muted-foreground">Give a memory, not just a thing. A day on the water lasts forever.</p>
            </div>
          </div>
        </div>

        {/* Amount Cards */}
        <h2 className="text-3xl font-bold mb-8 text-center">Choose an amount</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {giftCardAmounts.map((card) => (
            <div key={card.value} className="bg-white border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">{card.amount}</div>
              <p className="text-muted-foreground mb-6">{card.description}</p>
              <a
                href="tel:8148383938"
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-colors w-full"
              >
                Call to Purchase
              </a>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
              <h3 className="font-bold mb-1">Call or visit</h3>
              <p className="text-sm text-muted-foreground">Purchase over the phone or in person</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
              <h3 className="font-bold mb-1">We send it</h3>
              <p className="text-sm text-muted-foreground">Physical card mailed or pick up in person</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
              <h3 className="font-bold mb-1">They enjoy</h3>
              <p className="text-sm text-muted-foreground">Redeem for any rental, tour, or special</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
