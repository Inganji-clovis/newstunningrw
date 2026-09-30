import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { airlinesList } from '@/data/airlines';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Airlines | Stunning Travel & Tours Ltd',
  description: 'Explore flight options with RwandAir, Ethiopian Airlines, Kenya Airways, Qatar Airways, Turkish Airlines, KLM and more.',
};

export default function AirlinesPage() {
  return (
    <>
      <PageHero
        title="Your journey starts with the right flight."
        tag="AIR TICKETING"
        text="Ask our team to check airline options for your route, dates and travel preferences."
        image="wb"
      />

      <section className="section">
        <SectionHeading
          tag="AIRLINES TO ASK US ABOUT"
          title="Explore your options."
          text="Schedules, routes, fares and baggage depend on the itinerary. We confirm the details in your quotation."
        />

        <div className="airline-grid">
          {airlinesList.map((airline) => (
            <article key={airline.name}>
              {airline.photo && (
                <img
                  className="aircraft-photo"
                  loading="lazy"
                  src={`/assets/${airline.photo}.webp`}
                  alt={`${airline.name} aircraft`}
                />
              )}
              <div className="airline-body">
                {airline.logo ? (
                  <img
                    className="airline-logo"
                    src={`/assets/${airline.logo}.webp`}
                    alt={airline.name}
                  />
                ) : null}
                <h3>{airline.name}</h3>
                <p>Request available flight options and fare details for your journey.</p>
                <a
                  className="text-link"
                  href={`https://wa.me/250788312724?text=${encodeURIComponent(
                    `Hello Stunning Travel, I would like to enquire about flights with ${airline.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire about flights
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
