import type { Metadata } from 'next';
import { motorboats } from '@/data/motorboats';

export const metadata: Metadata = {
  title: 'Specials',
  description:
    'Weekend Fishing Special — Save $40 on motorboat rentals at Presque Isle Paddlesports. Available every Friday through Sunday.',
};

export default function SpecialsPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-secondary text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full mb-4">
            $40 OFF
          </span>
          <h1 className="text-5xl font-bold mb-4">Weekend Fishing Special</h1>
          <p className="text-xl">Hit the water for less every weekend</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Main Special Card */}
        <div className="bg-white border border-border rounded-xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            <div
              className="h-64 md:h-auto bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1638554060125-6445f733da4c?w=600&q=80)',
              }}
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">Save $40 on any motorboat rental</h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-primary">When:</span>
                  <span className="text-muted-foreground">Every Friday, Saturday &amp; Sunday</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-primary">Minimum:</span>
                  <span className="text-muted-foreground">4-hour rental required</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-primary">Savings:</span>
                  <span className="text-muted-foreground">$40 off regular price</span>
                </div>
              </div>
              <a
                href="tel:8148383938"
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-lg text-lg font-medium transition-colors w-full"
              >
                Call to Book — (814) 838-3938
              </a>
            </div>
          </div>
        </div>

        {/* Eligible Boats */}
        <h2 className="text-3xl font-bold mb-8">Eligible boats</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {motorboats.map((boat) => {
            const fourHourPricing = boat.pricing.find((p) => p.duration === '4 hours');
            if (!fourHourPricing) return null;
            const regularPrice = parseInt(fourHourPricing.price.replace('$', ''));
            const specialPrice = regularPrice - 40;
            return (
              <div key={boat.name} className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-1">{boat.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{boat.tagline}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-primary">${specialPrice}</span>
                  <span className="text-lg text-muted-foreground line-through">{fourHourPricing.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">4-hour weekend rental</p>
                <div className="flex flex-wrap gap-1.5">
                  {Object.entries(boat.specs).map(([key, value]) => (
                    <span key={key} className="bg-muted text-xs px-2 py-1 rounded-full">
                      {key}: {value}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Details */}
        <div className="bg-muted p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">Important details</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Weekend special applies to Friday, Saturday, and Sunday rentals only</li>
            <li>• Minimum 4-hour rental required to qualify</li>
            <li>• Cannot be combined with other offers</li>
            <li>• $200 refundable security deposit still applies</li>
            <li>• Subject to availability — call ahead to reserve</li>
            <li>• Fuel is included in all motorboat rentals</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to save?</h2>
          <p className="text-muted-foreground mb-6">Call us to book your weekend fishing special</p>
          <a
            href="tel:8148383938"
            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Call (814) 838-3938
          </a>
        </div>
      </div>
    </div>
  );
}
