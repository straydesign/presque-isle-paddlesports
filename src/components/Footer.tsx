import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-3">Presque Isle Paddlesports</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Your gateway to unforgettable water adventures on Presque Isle State Park.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">Location</h4>
            <address className="not-italic text-sm opacity-90 space-y-1">
              <p>Presque Isle State Park</p>
              <p>Erie, PA 16505</p>
            </address>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">Contact</h4>
            <ul className="space-y-1 text-sm opacity-90">
              <li>
                <a href="tel:8148383938" className="hover:opacity-100 transition-opacity">
                  (814) 838-3938
                </a>
              </li>
              <li>
                <a href="mailto:info@pippaddlesports.com" className="hover:opacity-100 transition-opacity">
                  info@pippaddlesports.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/rentals" className="opacity-90 hover:opacity-100 transition-opacity">
                  Rentals
                </Link>
              </li>
              <li>
                <Link href="/tours" className="opacity-90 hover:opacity-100 transition-opacity">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/specials" className="opacity-90 hover:opacity-100 transition-opacity">
                  Specials
                </Link>
              </li>
              <li>
                <Link href="/plan-visit" className="opacity-90 hover:opacity-100 transition-opacity">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link href="/faq" className="opacity-90 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/employment" className="opacity-90 hover:opacity-100 transition-opacity">
                  Employment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Presque Isle Paddlesports. All rights reserved.</p>
          <p>
            Built by{' '}
            <a
              href="https://straywebdesign.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100"
            >
              Stray Web Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
