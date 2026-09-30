import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function RichFooter() {
  return (
    <>
      <footer className="rich-footer">
        <div className="footer-grid">
          <div>
            <Link className="real-logo" href="/" aria-label="Stunning Travel &amp; Tours home">
              <img src="/assets/stunning-logo.png?v=2" alt="Stunning Travel &amp; Tours Ltd" />
            </Link>
            <p>
              Air tickets, visa assistance, safari experiences and hotel bookings, coordinated from Kigali.
            </p>
            <p className="slogan">Making travel easy and fun!</p>
            <div className="social-links">
              <a href="https://www.facebook.com/marvelousrwandatours" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <img className="social-brand-mark" src="/assets/facebook-f.svg" width={18} height={18} style={{ width: 18, height: 18 }} alt="" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/stunningtraveltours_rw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <img className="social-brand-mark" src="/assets/instagram.svg" width={18} height={18} style={{ width: 18, height: 18 }} alt="" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/stunning-travel-tours-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <img className="social-brand-mark" src="/assets/linkedin-in.svg" width={18} height={18} style={{ width: 18, height: 18 }} alt="" aria-hidden="true" />
              </a>
              <a href="https://www.tiktok.com/@stunningtraveltours_rw" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok">
                <img className="social-brand-mark" src="/assets/tiktok.svg" width={18} height={18} style={{ width: 18, height: 18 }} alt="" aria-hidden="true" />
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

      {/* Floating WhatsApp CTA */}
      <a
        className="whatsapp-float"
        href="https://wa.me/250788312724"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="social-brand-mark"
          src="/assets/whatsapp.svg"
          width={21}
          height={21}
          style={{ width: 21, height: 21 }}
          alt=""
          aria-hidden="true"
        />
        <span>Let’s talk</span>
      </a>
    </>
  );
}
