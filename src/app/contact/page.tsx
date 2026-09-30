import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Phone, Mail, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact our team | Stunning Travel & Tours Ltd',
  description: 'Reach our Kigali office by phone, email, WhatsApp or visit us at the CHIC Building.',
};

export default function ContactPage() {
  const googleMapsUrl = 'https://maps.google.com/?q=CHIC+Building+Kigali+Rwanda';

  return (
    <>
      <PageHero
        title="Let’s plan something stunning."
        tag="CONTACT OUR TEAM"
        text="Call, write, send a WhatsApp message or visit our office in Kigali. We’re here to discuss your journey."
        image="image30"
      />

      <section className="section contact-layout">
        <div>
          <p className="eyebrow red">LET’S TALK</p>
          <h2>Your plans start with a conversation.</h2>
          <div className="contact-options">
            <a href="tel:+250788312724">
              <Phone size={22} />
              <span>
                <small>Mobile</small>
                <strong>+250 788 312 724</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>

            <a href="tel:+250788842000">
              <Phone size={22} />
              <span>
                <small>Office</small>
                <strong>+250 788 842 000</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>

            <a href="mailto:info@stunningrw.com">
              <Mail size={22} />
              <span>
                <small>Email</small>
                <strong>info@stunningrw.com</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>

            <a href="mailto:stunningtravelrw@gmail.com">
              <Mail size={22} />
              <span>
                <small>Alternative email</small>
                <strong>stunningtravelrw@gmail.com</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>

            <a href="https://wa.me/250788312724" target="_blank" rel="noopener noreferrer">
              <img
                className="social-brand-mark"
                src="/assets/whatsapp.svg"
                width={24}
                height={24}
                style={{ width: '24px', height: '24px' }}
                alt="WhatsApp"
              />
              <span>
                <small>WhatsApp</small>
                <strong>Chat with our team</strong>
              </span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <aside className="office-card">
          <img
            className="office-front"
            src="/assets/office-front.webp"
            alt="Stunning Travel & Tours office entrance at the CHIC Building"
          />
          <MapPin size={35} />
          <h3>Visit us in Kigali</h3>
          <p>
            CHIC Building
            <br />
            Basement Floor -3, AE01
            <br />
            Use Gate 4, near Inyange Distributors
            <br />
            Kigali, Rwanda
          </p>
          <a
            className="outline-btn"
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open directions
            <ArrowUpRight size={17} />
          </a>
          <hr />
          <h3>Prefer to send your plans?</h3>
          <p>Fill in a short enquiry so we have the details of your trip.</p>
          <a className="btn" href="https://wa.me/250788312724?text=Hello%20Stunning%20Travel,%20I%20would%20like%20to%20plan%20a%20trip" target="_blank" rel="noopener noreferrer">
            Send an enquiry
            <ArrowRight size={17} />
          </a>
        </aside>
      </section>

      <section className="section section-soft">
        <SectionHeading
          tag="STAY CONNECTED"
          title="Find Stunning on social."
        />
        <div className="social-profile-grid">
          <a
            href="https://www.facebook.com/marvelousrwandatours"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-brand-mark" src="/assets/facebook-f.svg" width={22} height={22} alt="" />
            <strong>Facebook</strong>
            <ArrowUpRight size={18} />
          </a>
          <a
            href="https://www.instagram.com/stunningtraveltours_rw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-brand-mark" src="/assets/instagram.svg" width={22} height={22} alt="" />
            <strong>Instagram</strong>
            <ArrowUpRight size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/stunning-travel-tours-ltd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-brand-mark" src="/assets/linkedin-in.svg" width={22} height={22} alt="" />
            <strong>LinkedIn</strong>
            <ArrowUpRight size={18} />
          </a>
          <a
            href="https://www.tiktok.com/@stunningtraveltours_rw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-brand-mark" src="/assets/tiktok.svg" width={22} height={22} alt="" />
            <strong>TikTok</strong>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
