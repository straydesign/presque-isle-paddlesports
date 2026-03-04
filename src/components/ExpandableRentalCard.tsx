'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface RentalItem {
  name: string;
  tagline: string;
  specs: Record<string, string>;
  pricing: { duration: string; price: string }[];
  note?: string;
}

interface ExpandableRentalCardProps {
  image: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  items: RentalItem[];
  note?: string;
  bookable?: boolean;
}

export function ExpandableRentalCard({
  image,
  title,
  description,
  badge,
  badgeColor = 'bg-secondary text-secondary-foreground',
  items,
  note,
  bookable = false,
}: ExpandableRentalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Header — always visible */}
      <div
        className="relative h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {badge && (
          <span className={`absolute top-3 right-3 ${badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>
            {badge}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary font-medium hover:underline"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Hide details' : 'View options & pricing'}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-6">
                {items.map((item) => (
                  <div key={item.name} className="border-t pt-4">
                    <h4 className="text-lg font-bold mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.tagline}</p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Object.entries(item.specs).map(([key, value]) => (
                        <span
                          key={key}
                          className="bg-muted text-xs px-2.5 py-1 rounded-full"
                        >
                          {key}: {value}
                        </span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1 mb-3">
                      {item.pricing.map((p) => (
                        <div
                          key={p.duration}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-muted-foreground">{p.duration}</span>
                          <span className="font-bold">{p.price}</span>
                        </div>
                      ))}
                    </div>

                    {item.note && (
                      <p className="text-xs text-muted-foreground italic">{item.note}</p>
                    )}

                    {bookable && (
                      <a
                        href="tel:8148383938"
                        className="mt-3 inline-flex items-center justify-center w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                      >
                        Call to Reserve — (814) 838-3938
                      </a>
                    )}
                  </div>
                ))}

                {note && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">{note}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
