'use client';

import { ExpandableRentalCard } from '@/components/ExpandableRentalCard';
import { kayaks } from '@/data/kayaks';
import { paddleboards } from '@/data/paddleboards';
import { canoes } from '@/data/canoes';
import { motorboats, motorboatNotes } from '@/data/motorboats';

export function RentalsClient() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Paddle Rentals */}
      <h2 className="text-3xl font-bold mb-8">Paddle Rentals</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <ExpandableRentalCard
          image="https://images.unsplash.com/photo-1669659738635-7af645bb8a5b?w=500&q=80"
          title="Kayaks"
          description="Single and tandem options for all skill levels."
          badge="Most Popular"
          items={kayaks}
          note="Walk-ins welcome! We don't reserve kayaks in advance — just show up and paddle."
        />
        <ExpandableRentalCard
          image="https://images.unsplash.com/photo-1661469624344-f3ba78a9f166?w=500&q=80"
          title="Paddleboards"
          description="Stand up and explore the calm waters."
          badge="Zen Mode"
          badgeColor="bg-accent text-accent-foreground"
          items={paddleboards}
          note="Walk-ins welcome! No reservation needed for paddleboards."
        />
        <ExpandableRentalCard
          image="https://images.unsplash.com/photo-1759169973365-9a65e298fc93?w=500&q=80"
          title="Canoes"
          description="Perfect for families and slow cruising."
          badge="Family Pick"
          items={canoes}
          note="Walk-ins welcome! Canoes are first-come, first-served."
        />
      </div>

      {/* Motorized Rentals */}
      <h2 className="text-3xl font-bold mb-8">Motorized Rentals</h2>
      <div className="grid md:grid-cols-1 gap-6 mb-8">
        <ExpandableRentalCard
          image="https://images.unsplash.com/photo-1638554060125-6445f733da4c?w=500&q=80"
          title="Motorboats"
          description="Pontoons and helm boats — no license required. Fuel included."
          badge="Reservations Recommended"
          badgeColor="bg-accent text-accent-foreground"
          items={motorboats}
          bookable
        />
      </div>

      {/* Motorboat Notes */}
      <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mb-16">
        <h4 className="font-bold mb-2">Motorboat Notes</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          {motorboatNotes.map((note) => (
            <li key={note}>• {note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
