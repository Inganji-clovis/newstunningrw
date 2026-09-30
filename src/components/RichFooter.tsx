import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function RichFooter() {
  return (
    <>
      <footer className="rich-footer">
        <div className="footer-grid">
          <div>
            <Link className="real-logo" href="/" aria-label="Stunning Travel & Tours home">
              <img
                src="/images/stunning travel and tours logo.png"
                alt="Stunning Travel & Tours Ltd"
                style={{ height: '42px', width: 'auto', marginBottom: '1rem', objectFit: 'contain' }}
              />
            </Link>
            <p>
              Air tickets, visa assistance, safari experiences and hotel bookings, coordinated from Kigali.
            </p>
            <p className="slogan">Making travel easy and fun!</p>
            <div className="social-links">
              <a href="https://www.facebook.com/marvelousrwandatours" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/stunningtraveltours_rw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/stunning-travel-tours-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.tiktok.com/@stunningtraveltours_rw" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3>Explore</h3>
            <Link href="/safaris">Our safaris</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/national-parks">National parks</Link>
            <Link href="/blog">Travel stories &amp; guides</Link>
            <Link href="/about">About us</Link>
          </div>

          <div>
            <h3>Travel assistance</h3>
            <Link href="/services/flights">Air tickets</Link>
            <Link href="/services/visas">Visa assistance</Link>
            <Link href="/services/hotels">Hotel bookings</Link>
            <Link href="/services/tours">Tour operations</Link>
            <Link href="/services/car-rental">Car rental &amp; transfers</Link>
            <Link href="/airlines">Airlines</Link>
          </div>

          <div>
            <h3>Let’s talk</h3>
            <a href="tel:+250788312724">Mobile: +250 788 312 724</a>
            <a href="tel:+250788842000">Office: +250 788 842 000</a>
            <a href="mailto:info@stunningrw.com">info@stunningrw.com</a>
            <a href="mailto:stunningtravelrw@gmail.com">stunningtravelrw@gmail.com</a>
            <p>
              CHIC Building, Basement Floor -3<br />
              AE01 · Gate 4, near Inyange Distributors<br />
              Kigali, Rwanda
            </p>
            <Link className="text-link" href="/contact">
              Find our office <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Stunning Travel &amp; Tours Ltd</span>
          <Link href="/crm">
            Team workspace <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>

      {/* Floating WhatsApp concierge */}
      <a
        className="whatsapp-float"
        href="https://wa.me/250788312724"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span>Let’s talk</span>
      </a>
    </>
  );
}
