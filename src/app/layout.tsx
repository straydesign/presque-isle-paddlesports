import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Presque Isle Paddlesports | Kayak, Paddleboard & Boat Rentals in Erie, PA',
    template: '%s | Presque Isle Paddlesports',
  },
  description:
    'Rent kayaks, paddleboards, canoes, and motorboats at Presque Isle State Park in Erie, PA. Guided tours available. No experience needed.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Presque Isle Paddlesports',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Structured Data — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Presque Isle Paddlesports',
              description:
                'Kayak, paddleboard, canoe, and motorboat rentals at Presque Isle State Park.',
              telephone: '+1-814-838-3938',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Erie',
                addressRegion: 'PA',
                postalCode: '16505',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 42.1547,
                longitude: -80.1165,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '19:00',
                  validFrom: '2026-05-01',
                  validThrough: '2026-09-30',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday', 'Sunday'],
                  opens: '07:00',
                  closes: '20:00',
                  validFrom: '2026-05-01',
                  validThrough: '2026-09-30',
                },
              ],
              url: 'https://pippaddlesports.com',
            }),
          }}
        />
      </body>
    </html>
  );
}
