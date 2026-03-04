'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Menu, X, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Tours', href: '/tours' },
  {
    label: 'Specials',
    href: '/specials',
    badge: '$40 OFF',
  },
  {
    label: 'Plan Your Visit',
    href: '/plan-visit',
    children: [
      { label: 'Find Us', href: '/plan-visit#find-us' },
      { label: 'Hours', href: '/plan-visit#hours' },
      { label: 'Policies', href: '/policies' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeMobile]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
            <span>Presque Isle Paddlesports</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="px-4 py-2 text-foreground hover:text-primary transition-colors flex items-center text-sm font-medium">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 hover:bg-gray-50 text-sm text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-1.5"
                >
                  {item.label}
                  {item.badge && (
                    <span className="bg-secondary text-secondary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            )}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/rentals"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Book Now
            </Link>
            <a
              href="tel:8148383938"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <Link
              href="/plan-visit#find-us"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
              <MapPin className="h-3.5 w-3.5" />
              Directions
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t" role="menu">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:bg-gray-50 font-medium"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-gray-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-8 py-2.5 text-sm text-foreground"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:bg-gray-50 font-medium"
                  onClick={closeMobile}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            )}

            <div className="mt-4 px-4 space-y-3">
              <Link
                href="/rentals"
                className="block w-full text-center bg-secondary text-secondary-foreground hover:bg-secondary/90 px-5 py-3 rounded-lg font-medium transition-colors"
                onClick={closeMobile}
              >
                Book Now
              </Link>
              <div className="flex gap-4 justify-center text-sm">
                <a href="tel:8148383938" className="text-muted-foreground flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" />
                  (814) 838-3938
                </a>
                <Link
                  href="/plan-visit#find-us"
                  className="text-muted-foreground flex items-center gap-1"
                  onClick={closeMobile}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Directions
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
