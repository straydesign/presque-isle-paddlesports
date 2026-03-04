import type { Metadata } from 'next';
import { FAQClient } from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about renting kayaks, paddleboards, and motorboats at Presque Isle Paddlesports.',
};

export default function FAQPage() {
  return (
    <div>
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Fast, confident answers</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20">
        <FAQClient />

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">Give us a call or stop by</p>
          <a href="tel:8148383938" className="text-primary font-bold text-xl hover:underline">
            (814) 838-3938
          </a>
        </div>
      </div>
    </div>
  );
}
