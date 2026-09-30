import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import PhotoServices from '@/components/PhotoServices';
import { Car, ArrowUpRight, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Assistance | Stunning Travel & Tours Ltd',
  description: 'Flight ticketing, visa support, hotel arrangements and ground transfers in Kigali, Rwanda.',
};

export default function TravelAssistancePage() {
  const steps = [
    {
      num: '01',
      title: 'Share your plans',
      desc: 'Choose a service and tell us your destination, dates and preferences.',
    },
    {
      num: '02',
      title: 'Review your options',
      desc: 'Our team prepares the next steps or a quote for you to review.',
    },
    {
      num: '03',
      title: 'Confirm the details',
      desc: 'Agree your itinerary, inclusions and payment arrangements before booking.',
    },
  ];

  return (
    <>
      <PageHero
        title="Every part of your trip, considered."
        tag="TRAVEL ASSISTANCE"
        text="Bring your flights, visa preparation, stays and travel arrangements together with our Kigali team."
        image="image30"
      />

      <section className="section">
        <PhotoServices />

        <div className="rental-callout">
          <Car size={35} />
          <div>
            <h3>Car rental & airport transfers</h3>
            <p>Connect your arrival, hotel, meetings and activities.</p>
          </div>
          <Link className="text-link" href="/services/car-rental">
            Explore transport options
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section section-soft">
        <SectionHeading
          tag="A CLEAR WAY FORWARD"
          title="From your first idea to your confirmed plan."
        />
        <div className="three-cols steps">
          {steps.map((s) => (
            <article key={s.num}>
              <span>{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <a
          className="btn"
          href="https://wa.me/250788312724?text=Hello%20Stunning%20Travel,%20I%20would%20like%20to%20start%20an%20enquiry"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start an enquiry
          <ArrowRight size={17} />
        </a>
      </section>
    </>
  );
}
