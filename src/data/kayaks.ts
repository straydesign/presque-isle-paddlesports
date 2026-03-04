export const kayaks = [
  {
    name: 'Single Kayak',
    tagline: 'Perfect for solo adventures',
    specs: { capacity: '1 person', weight: '45 lbs', length: "10'" },
    pricing: [
      { duration: '2 hours', price: '$25' },
      { duration: '4 hours', price: '$40' },
      { duration: 'Full day', price: '$60' },
    ],
    note: 'Stable and forgiving — great for beginners',
  },
  {
    name: 'Tandem Kayak',
    tagline: 'Paddle together',
    specs: { capacity: '2 people', weight: '65 lbs', length: "12'" },
    pricing: [
      { duration: '2 hours', price: '$35' },
      { duration: '4 hours', price: '$55' },
      { duration: 'Full day', price: '$80' },
    ],
    note: 'Perfect for couples and parent-child outings',
  },
];
