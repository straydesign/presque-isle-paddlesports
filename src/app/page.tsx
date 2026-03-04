import Link from 'next/link';
import Image from 'next/image';
import { Check, Shield, Clock, Compass, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1754618839366-f59c41dab74d?w=1400&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your next adventure starts on the water.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            No experience needed. We&rsquo;ll get you set up fast, recommend the best route, and send you out ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 px-4">
            <Link
              href="/rentals"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Book Your Adventure Now
            </Link>
            <Link
              href="/rentals"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Explore All Rentals
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-6 max-w-4xl mx-auto">
            {['Life jackets included', 'Maps available', 'Beginner friendly', 'Family friendly'].map(
              (chip) => (
                <div
                  key={chip}
                  className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full py-2.5 px-4"
                >
                  <Check className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{chip}</span>
                </div>
              )
            )}
          </div>

          <p className="text-sm text-white/80">Weather permitting &bull; Seasonal hours &bull; Quick check in</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '12+', label: 'Years on the water' },
              { value: '50K+', label: 'Happy adventurers' },
              { value: '4.9★', label: 'Average rating' },
              { value: '100%', label: 'Safety record' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How it works (we&rsquo;ll guide you)</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You just show up, we handle the rest.
            </p>
          </div>

          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">1</div>
                <h3 className="text-3xl font-bold">Choose your ride</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Browse kayaks, paddleboards, canoes, or motorboats. Not sure what&rsquo;s right? We&rsquo;ll help you pick based on your experience level, group size, and what kind of adventure you&rsquo;re after.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Single Kayaks from $25</Badge>
                <Badge variant="secondary">Paddleboards from $30</Badge>
                <Badge variant="secondary">Canoes from $35</Badge>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image src="https://images.unsplash.com/photo-1747493159639-d582218facb5?w=800&q=80" alt="Kayaks lined up at the shore" width={800} height={600} className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image src="https://images.unsplash.com/photo-1768827865294-0f861b46b78e?w=800&q=80" alt="Safety equipment and life jackets" width={800} height={600} className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">2</div>
                <h3 className="text-3xl font-bold">We get you ready</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Quick safety briefing (5 minutes, tops). We&rsquo;ll fit you with a Coast Guard approved life jacket, show you how to paddle, and walk you through the route options.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary flex-shrink-0" /><span>Safety gear fitted &amp; explained</span></div>
                <div className="flex items-center gap-2"><Compass className="h-5 w-5 text-primary flex-shrink-0" /><span>Route recommendations based on weather</span></div>
                <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary flex-shrink-0" /><span>Quick check-in, no long waits</span></div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">3</div>
                <h3 className="text-3xl font-bold">You make the memory</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Head out on the water and enjoy an unforgettable day. Paddle at your own pace, take in the views, spot wildlife, snap photos.
              </p>
              <Link href="/rentals" className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-medium transition-colors">
                Let&rsquo;s Go — Book Now
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image src="https://images.unsplash.com/photo-1667336384354-f1ccb197241e?w=800&q=80" alt="Person paddleboarding on calm water" width={800} height={600} className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Pick Your Adventure */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Your Options</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Pick your adventure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Each option offers something different. Choose what speaks to you.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Kayaks', image: 'https://images.unsplash.com/photo-1754618839366-f59c41dab74d?w=600&q=80', badge: 'Most Popular', badgeColor: 'bg-secondary text-secondary-foreground', desc: 'Quiet, smooth, and the best way to explore the lagoons.', prices: [{ l: 'Single kayak', p: '$25/2hr' }, { l: 'Tandem kayak', p: '$35/2hr' }], cta: 'Explore Kayaks' },
              { title: 'Paddleboards', image: 'https://images.unsplash.com/photo-1667336384354-f1ccb197241e?w=600&q=80', badge: 'Zen Mode', badgeColor: 'bg-accent text-accent-foreground', desc: 'Stand up, breathe deep, and glide across calm water.', prices: [{ l: 'Standard SUP', p: '$30/2hr' }, { l: 'Wide stability', p: '$35/2hr' }], cta: 'Explore SUPs' },
              { title: 'Canoes', image: 'https://images.unsplash.com/photo-1716172935868-b23591a7876b?w=600&q=80', badge: 'Family Pick', badgeColor: 'bg-secondary text-secondary-foreground', desc: 'Perfect for pairs, families, and slow cruising.', prices: [{ l: '2-person canoe', p: '$35/2hr' }, { l: '3-person canoe', p: '$45/2hr' }], cta: 'Explore Canoes' },
              { title: 'Motorboats', image: 'https://images.unsplash.com/photo-1693035647220-6cb03882baab?w=600&q=80', badge: 'Group Fun', badgeColor: 'bg-accent text-accent-foreground', desc: 'For cruising, group days, and open water freedom.', prices: [{ l: 'Pontoon boat', p: '$200/4hr' }, { l: 'Fits 10 people', p: '' }], cta: 'Explore Boats' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute top-3 right-3 ${item.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>{item.badge}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <div className="space-y-2 mb-4">
                    {item.prices.map((pr) => (
                      <div key={pr.l} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{pr.l}</span>
                        {pr.p && <span className="font-medium">{pr.p}</span>}
                      </div>
                    ))}
                  </div>
                  <Link href="/rentals" className="block w-full text-center border border-border hover:bg-primary hover:text-primary-foreground rounded-lg py-2.5 text-sm font-medium transition-colors">{item.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Teaser */}
      <section className="py-24 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1754618839366-f59c41dab74d?w=1400&q=80)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <Badge variant="outline" className="mb-4 border-white text-white">Guided Tours</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Want the full experience? Go guided.</h2>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">Tours are the easiest way to get the best route, the best timing, and the best photos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-lg font-medium transition-colors">See All Tours</Link>
            <Link href="/specials" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4 rounded-lg font-medium transition-colors">View Specials — $40 OFF</Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-secondary text-secondary" />
            ))}
          </div>
          <blockquote className="text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed">
            &ldquo;Best day we had all summer. The staff was incredible, the equipment was top-notch, and the sunset tour was absolutely magical.&rdquo;
          </blockquote>
          <p className="text-lg text-muted-foreground">— Sarah M., first-time kayaker</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561580237-fdc24a3b0a52?w=1400&q=80)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-primary/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">Ready to get on the water?</h2>
          <p className="text-lg sm:text-xl mb-10 opacity-90">We&rsquo;ll guide you from the dock to the water. All you need to do is show up.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/rentals" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10 py-5 rounded-lg font-medium transition-colors">Book Your Adventure Now</Link>
            <Link href="/plan-visit" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 text-lg px-10 py-5 rounded-lg font-medium transition-colors">Plan Your Visit</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['Same-day rentals available', 'No experience needed', 'All equipment included'].map((item) => (
              <div key={item} className="flex items-center gap-2"><Check className="h-4 w-4" /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
