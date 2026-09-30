import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { OfficeFeature } from '@/components/OfficeFeature';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us | Stunning Travel & Tours Ltd',
  description: 'Your Kigali-based travel partner for flights, visa assistance, hotel bookings and East African safaris.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Your Kigali-based travel partner."
        tag="ABOUT STUNNING TRAVEL & TOURS LTD"
        text="Making travel easy and fun — from the first conversation to the plans you look forward to."
        image="image30"
      />

      <section className="section intro-row">
        <div>
          <p className="eyebrow red">TRAVEL WITH PURPOSE. EXPLORE WITH CURIOSITY.</p>
          <h2>
            Every journey
            <br />
            starts with you.
          </h2>
        </div>
        <div>
          <p>
            Stunning Travel & Tours Ltd brings air ticketing, visa assistance, hotel bookings and tour operations together from our office in Kigali. We work with travelers planning business trips, visits, studies and holidays.
          </p>
          <p>
            Our safari collection spans Rwanda, Uganda, Kenya and Tanzania. Whether you are drawn to primates, wildlife, cultural experiences or a beach escape, we begin with your interests and build the details around them.
          </p>
          <p>
            You can reach our team by phone, email, WhatsApp or by visiting us at the CHIC Building. Tell us what you are planning; we’ll help you understand the next steps.
          </p>
          <Link className="text-link" href="/contact">
            Meet us in Kigali
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <OfficeFeature />

      <section className="section section-soft">
        <SectionHeading
          tag="HOW WE WORK"
          title="Personal attention. Practical support."
        />
        <div className="three-cols">
          <article>
            <h3>We listen first</h3>
            <p>Your dates, budget and priorities shape the options we prepare.</p>
          </article>
          <article>
            <h3>We connect the details</h3>
            <p>Flights, accommodation, tour plans and transport can be considered together.</p>
          </article>
          <article>
            <h3>We keep the next step clear</h3>
            <p>We explain the proposal and confirm the agreed arrangements before you book.</p>
          </article>
        </div>
      </section>
    </>
  );
}
