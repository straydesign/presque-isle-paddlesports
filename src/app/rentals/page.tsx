import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { RentalsClient } from './RentalsClient';

export const metadata: Metadata = {
  title: 'Rentals',
  description:
    'Rent kayaks, paddleboards, canoes, and motorboats at Presque Isle State Park. Life jackets and safety briefing included.',
};

export default function RentalsPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Rentals</h1>
          <p className="text-xl">Choose your adventure on the water</p>
        </div>
      </div>

      {/* Client-side expandable cards */}
      <RentalsClient />

      {/* What's Included */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-muted p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6">What&rsquo;s included with every rental</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Life Jackets', desc: 'Coast Guard approved, properly fitted' },
              { title: 'Paddles', desc: 'Quality paddles included' },
              { title: 'Safety Briefing', desc: 'Quick, clear instructions' },
              { title: 'Route Maps', desc: 'Available on request' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beginner Tip */}
        <div className="bg-accent/10 border border-accent/20 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">Our pick for beginners</h2>
          <p className="mb-4">
            Never been on the water? Start with a single kayak. They&rsquo;re stable, easy to maneuver, and perfect for building confidence.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">Questions? Give us a call.</p>
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
