import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description:
    'Find us at Presque Isle State Park in Erie, PA. See hours, parking info, and what to expect when you arrive.',
};

export default function PlanVisitPage() {
  return (
    <div>
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Plan Your Visit</h1>
          <p className="text-xl">Everything you need to know before you arrive</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20 space-y-16">
        {/* Find Us */}
        <section id="find-us">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <MapPin className="h-8 w-8 text-primary" />
            Find Us
          </h2>
          <div className="bg-white border border-border rounded-xl p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Presque Isle State Park</h3>
              <p className="text-muted-foreground">Erie, PA 16505</p>
            </div>

            <div className="bg-muted rounded-lg overflow-hidden mb-6" style={{ height: 300 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47386.12345!2d-80.1165!3d42.1547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882d7e3b5f5b5b5b%3A0x1234567890abcdef!2sPresque%20Isle%20State%20Park!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Presque Isle State Park map"
              />
            </div>

            <div>
              <h4 className="font-bold mb-2">Parking</h4>
              <p className="text-muted-foreground">Free parking available in the state park lots. Follow signs to the boat launch areas.</p>
            </div>
          </div>
        </section>

        {/* Hours */}
        <section id="hours">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Clock className="h-8 w-8 text-primary" />
            Hours (Seasonal)
          </h2>
          <div className="bg-white border border-border rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Summer (May – September)</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday – Friday: 8:00 AM – 7:00 PM</p>
                  <p>Saturday – Sunday: 7:00 AM – 8:00 PM</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Off-Season (October – April)</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Thursday – Monday: 9:00 AM – 5:00 PM</p>
                  <p>Closed Tuesday &amp; Wednesday</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Check-In */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            What to Expect at Check-In
          </h2>
          <div className="bg-white border border-border rounded-xl p-8">
            <div className="space-y-4">
              {[
                { step: 1, title: 'Arrive 15 minutes early', desc: 'This gives us time to get you checked in and fitted properly' },
                { step: 2, title: 'Sign waiver & show ID', desc: 'Quick paperwork, nothing complicated' },
                { step: 3, title: 'Get fitted with gear', desc: "We'll make sure your life jacket fits and you have everything you need" },
                { step: 4, title: 'Quick safety briefing', desc: 'Simple instructions and route recommendations' },
                { step: 5, title: 'Hit the water', desc: "You're ready to go!" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to book?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rentals"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/faq"
              className="border border-border hover:bg-muted px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
