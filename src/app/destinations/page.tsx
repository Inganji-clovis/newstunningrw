import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import CountryGrid from '@/components/CountryGrid';
import { destinations } from '@/data/destinations';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinations | Stunning Travel & Tours Ltd',
  description: 'Explore Rwanda, Kenya, Tanzania, Uganda and global destinations from Kigali.',
};

export default function DestinationsPage() {
  const worldDestinations = [
    { name: 'Dubai', image: 'city1' },
    { name: 'Paris', image: 'city2' },
    { name: 'London', image: 'city3' },
    { name: 'New York', image: 'city4' },
    { name: 'Nairobi', image: 'city7' },
    { name: 'Zanzibar', image: 'zanzibar' },
  ];

  return (
    <>
      <PageHero
        title="Where will your journey take you?"
        tag="DESTINATIONS"
        text="Discover our East African destinations or plan a flight and stay in a city further afield."
        image="image3"
      />

      <section className="section">
        <SectionHeading
          tag="OUR EAST AFRICAN HOME"
          title="Four countries to explore."
        />
        <CountryGrid />

        <div className="destination-summary">
          {destinations.map((d) => (
            <div key={d.slug}>
              <h3>{d.name}</h3>
              <p>{d.intro}</p>
              <Link className="text-link" href={`/destinations/${d.slug}`}>
                Explore {d.name}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-soft" id="world">
        <SectionHeading
          tag="CITIES & BEACH ESCAPES"
          title="And a world beyond."
          text="Flight and hotel enquiries for business, visits and holidays."
        />
        <div className="world-grid">
          {worldDestinations.map((item) => (
            <a
              key={item.name}
              className="world-card"
              href={`https://wa.me/250788312724?text=${encodeURIComponent(
                `Hello Stunning Travel, I would like to enquire about travel to ${item.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`/assets/${item.image}.webp`} alt={item.name} loading="lazy" />
              <span>
                {item.name}
                <ArrowUpRight size={20} />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
