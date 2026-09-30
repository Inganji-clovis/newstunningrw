'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowUpRight, Mail, Phone } from 'lucide-react';

const NAV_DESTINATIONS = [
  { label: 'Rwanda', href: '/destinations/rwanda' },
  { label: 'Kenya', href: '/destinations/kenya' },
  { label: 'Tanzania', href: '/destinations/tanzania' },
  { label: 'Uganda', href: '/destinations/uganda' },
];
const NAV_ASSISTANCE = [
  { label: 'Air tickets', href: '/services/flights' },
  { label: 'Visa assistance', href: '/services/visas' },
  { label: 'Hotel bookings', href: '/services/hotels' },
  { label: 'Tour operations', href: '/services/tours' },
  { label: 'Car rental & transfers', href: '/services/car-rental' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToEnquiry = () => {
    const el = document.getElementById('request');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Contact bar */}
      <div className="contact-bar">
        <div>
          <a href="mailto:info@stunningrw.com">
            <Mail size={13} aria-hidden="true" />
            info@stunningrw.com
          </a>
          <a href="tel:+250788842000">
            <Phone size={13} aria-hidden="true" />
            Office: +250 788 842 000
          </a>
          <a href="tel:+250788312724">
            Mobile: +250 788 312 724
          </a>
        </div>
        <div className="social-small">
          <a href="https://www.facebook.com/marvelousrwandatours" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/stunningtraveltours_rw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/stunning-travel-tours-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.tiktok.com/@stunningtraveltours_rw" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="site-header">
        <Link className="real-logo" href="/" aria-label="Stunning Travel & Tours home">
          <img
            src="/images/stunning travel and tours logo.png"
            alt="Stunning Travel & Tours Ltd"
            style={{ maxHeight: '48px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        </Link>

        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/safaris">Our safaris</Link>

          {/* Destinations dropdown */}
          <div className="dropdown-wrapper">
            <button type="button" className="nav-dropdown">
              Destinations <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              {NAV_DESTINATIONS.map(d => (
                <Link key={d.href} href={d.href}>{d.label}</Link>
              ))}
            </div>
          </div>

          {/* Travel assistance dropdown */}
          <div className="dropdown-wrapper">
            <button type="button" className="nav-dropdown">
              Travel assistance <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              {NAV_ASSISTANCE.map(d => (
                <Link key={d.href} href={d.href}>{d.label}</Link>
              ))}
            </div>
          </div>

          <Link href="/about">About us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact us</Link>
        </nav>

        <button className="btn header-cta" onClick={scrollToEnquiry}>
          Plan your trip <ArrowUpRight size={17} />
        </button>

        <button
          className="mobile-toggle"
          aria-label="Open navigation"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile nav */}
      <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-nav-head">
          <img
            src="/images/stunning travel and tours logo.png"
            alt="Stunning Travel & Tours"
            style={{ maxHeight: '40px', width: 'auto' }}
          />
          <button aria-label="Close navigation" onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none' }}>
            <X size={24} />
          </button>
        </div>
        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/safaris" onClick={() => setMobileOpen(false)}>Our safaris</Link>
        <Link href="/destinations/rwanda" onClick={() => setMobileOpen(false)}>Rwanda</Link>
        <Link href="/destinations/kenya" onClick={() => setMobileOpen(false)}>Kenya</Link>
        <Link href="/destinations/tanzania" onClick={() => setMobileOpen(false)}>Tanzania</Link>
        <Link href="/destinations/uganda" onClick={() => setMobileOpen(false)}>Uganda</Link>
        <Link href="/services/flights" onClick={() => setMobileOpen(false)}>Air tickets</Link>
        <Link href="/services/visas" onClick={() => setMobileOpen(false)}>Visa assistance</Link>
        <Link href="/services/hotels" onClick={() => setMobileOpen(false)}>Hotel bookings</Link>
        <Link href="/services/tours" onClick={() => setMobileOpen(false)}>Tour operations</Link>
        <Link href="/services/car-rental" onClick={() => setMobileOpen(false)}>Car rental</Link>
        <Link href="/about" onClick={() => setMobileOpen(false)}>About us</Link>
        <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
        <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact us</Link>
      </nav>
    </>
  );
}
