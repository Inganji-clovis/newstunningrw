'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowUpRight, Mail } from 'lucide-react';

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
  const [openDest, setOpenDest] = useState(false);
  const [openAssist, setOpenAssist] = useState(false);

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

      {/* Top contact bar */}
      <div className="contact-bar">
        <div>
          <a href="mailto:info@stunningrw.com">
            <Mail size={13} aria-hidden="true" />
            info@stunningrw.com
          </a>
          <a href="tel:+250788842000">Office: +250 788 842 000</a>
          <a href="tel:+250788312724">Mobile: +250 788 312 724</a>
        </div>
        <div className="social-small">
          <a href="https://www.facebook.com/marvelousrwandatours" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img className="social-brand-mark" src="/assets/facebook-f.svg" width={15} height={15} style={{ width: 15, height: 15 }} alt="" aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com/stunningtraveltours_rw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img className="social-brand-mark" src="/assets/instagram.svg" width={15} height={15} style={{ width: 15, height: 15 }} alt="" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/company/stunning-travel-tours-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img className="social-brand-mark" src="/assets/linkedin-in.svg" width={15} height={15} style={{ width: 15, height: 15 }} alt="" aria-hidden="true" />
          </a>
          <a href="https://www.tiktok.com/@stunningtraveltours_rw" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <img className="social-brand-mark" src="/assets/tiktok.svg" width={15} height={15} style={{ width: 15, height: 15 }} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Site header */}
      <header className="site-header">
        <Link className="real-logo" href="/" aria-label="Stunning Travel & Tours home">
          <img src="/assets/stunning-logo.png?v=2" alt="Stunning Travel & Tours Ltd" />
        </Link>

        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/safaris">Our safaris</Link>

          {/* Destinations dropdown */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setOpenDest(true)}
            onMouseLeave={() => setOpenDest(false)}
            style={{ position: 'relative' }}
          >
            <button
              type="button"
              className="nav-dropdown"
              onClick={() => setOpenDest(!openDest)}
            >
              Destinations <ChevronDown size={14} />
            </button>
            {openDest && (
              <div
                className="dropdown-menu"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: '#fff',
                  border: '1px solid #e0e5e8',
                  borderRadius: '6px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  padding: '8px 0',
                  minWidth: '180px',
                  zIndex: 90,
                }}
              >
                {NAV_DESTINATIONS.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#1b2c32',
                      fontSize: '14px',
                    }}
                    onClick={() => setOpenDest(false)}
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Travel assistance dropdown */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setOpenAssist(true)}
            onMouseLeave={() => setOpenAssist(false)}
            style={{ position: 'relative' }}
          >
            <button
              type="button"
              className="nav-dropdown"
              onClick={() => setOpenAssist(!openAssist)}
            >
              Travel assistance <ChevronDown size={14} />
            </button>
            {openAssist && (
              <div
                className="dropdown-menu"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: '#fff',
                  border: '1px solid #e0e5e8',
                  borderRadius: '6px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  padding: '8px 0',
                  minWidth: '220px',
                  zIndex: 90,
                }}
              >
                {NAV_ASSISTANCE.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#1b2c32',
                      fontSize: '14px',
                    }}
                    onClick={() => setOpenAssist(false)}
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
            )}
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
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 100,
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '380px',
              background: '#fff',
              padding: '24px',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <img src="/assets/stunning-logo.png?v=2" alt="Stunning Travel & Tours Ltd" style={{ height: '40px', width: 'auto' }} />
              <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '16px' }}>
              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/safaris" onClick={() => setMobileOpen(false)}>Our safaris</Link>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '10px' }}>
                <strong style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Destinations</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '10px' }}>
                  {NAV_DESTINATIONS.map((d) => (
                    <Link key={d.href} href={d.href} onClick={() => setMobileOpen(false)}>{d.label}</Link>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '10px' }}>
                <strong style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>Travel Assistance</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '10px' }}>
                  {NAV_ASSISTANCE.map((d) => (
                    <Link key={d.href} href={d.href} onClick={() => setMobileOpen(false)}>{d.label}</Link>
                  ))}
                </div>
              </div>
              <Link href="/about" onClick={() => setMobileOpen(false)}>About us</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact us</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
