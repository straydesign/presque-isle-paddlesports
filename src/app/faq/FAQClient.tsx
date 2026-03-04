'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion';

const faqs = [
  {
    q: 'Do I need experience?',
    a: "No. We'll get you set up and recommend the best route for your comfort level.",
  },
  {
    q: 'Do I need a reservation?',
    a: 'For paddle rentals, walk-ups are welcome. For motorboats and tours, booking ahead is best.',
  },
  {
    q: "What's included with rentals?",
    a: 'Paddle, life jacket, and leash. Maps available on request.',
  },
  {
    q: 'What should I wear?',
    a: "Comfortable clothes you don't mind getting a little wet. Sunscreen helps a lot.",
  },
  {
    q: 'Can kids come?',
    a: 'Yes. Great for families. Kids pricing applies on tours.',
  },
  {
    q: 'What if the weather is bad?',
    a: "We operate weather permitting. Safety comes first and we'll help you reschedule.",
  },
  {
    q: 'How early should I arrive?',
    a: 'About 15 minutes early for check-in and setup.',
  },
];

export function FAQClient() {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
