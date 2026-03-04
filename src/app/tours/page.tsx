import type { Metadata } from 'next';
import { Clock, Users, Camera } from 'lucide-react';
import { tours } from '@/data/tours';

export const metadata: Metadata = {
  title: 'Guided Tours',
  description:
    'Guided kayak tours at Presque Isle State Park — Morning Eco, History Eco, and Sunset tours. Expert guides, all equipment included.',
};

export default function ToursPage() {
  return (
    <div>
      {/* Hero with YouTube */}
      <div className="relative bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Guided Tours</h1>
          <p className="text-xl mb-8">Let us show you the best of Presque Isle</p>
          <div className="aspect-video max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/VBrdfAbV0gs?rel=0"
              title="Presque Isle Paddlesports Tours"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Season Notice */}
      <div className="bg-secondary/20 border-b border-secondary/30">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center">
          <p className="font-medium">Tours are currently closed for the season. Check back in May!</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Why Take a Tour */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Why take a tour?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Tours are the easiest way to get the best route, the best timing, and the best photos.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Perfect Timing</h3>
                <p className="text-sm text-muted-foreground">We know when the water is calmest and the light is best</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Local Knowledge</h3>
                <p className="text-sm text-muted-foreground">Your guide knows every cove and story</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Camera className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Best Photo Spots</h3>
                <p className="text-sm text-muted-foreground">We&rsquo;ll take you where the views are incredible</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Cards */}
        <div className="space-y-8">
          {tours.map((tour) => (
            <div key={tour.title} className="bg-white border border-border rounded-xl overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span>{tour.time}</span>
                      <span>&bull;</span>
                      <span>{tour.duration}</span>
                    </div>
                    <p className="mb-4">{tour.description}</p>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-bold">Best for:</span> {tour.bestFor}
                      </div>
                      <div>
                        <span className="font-bold">What to bring:</span> {tour.toBring}
                      </div>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-primary mb-1">{tour.adultPrice}</div>
                      <div className="text-sm text-muted-foreground">Adults</div>
                      <div className="text-xl font-bold text-primary mt-2">{tour.kidsPrice}</div>
                      <div className="text-sm text-muted-foreground">Kids (12 &amp; under)</div>
                    </div>
                    <a
                      href="tel:8148383938"
                      className="inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-colors w-full md:w-auto"
                    >
                      Call to Reserve
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-muted p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Questions about tours?</h3>
          <p className="mb-6 text-muted-foreground">Check our FAQ or give us a call</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/faq" className="border border-border hover:bg-white rounded-lg px-6 py-3 font-medium transition-colors">Read FAQ</a>
            <a href="tel:8148383938" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors">Call (814) 838-3938</a>
          </div>
        </div>
      </div>
    </div>
  );
}
