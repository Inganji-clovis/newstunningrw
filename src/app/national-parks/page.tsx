import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { destinations } from '@/data/destinations';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'National Parks & Reserves | Stunning Travel & Tours Ltd',
  description: 'Discover national parks across Rwanda, Kenya, Tanzania and Uganda.',
};

export default function NationalParksPage() {
  return (
    <>
      <PageHero
        title="Wild places. Lasting memories."
        tag="NATIONAL PARKS & RESERVES"
        text="Explore the landscapes behind our East African safari collection."
        image="image18"
      />

      <section className="section">
        <div className="park-grid">
          {destinations.map((dest) => (
            <article key={dest.slug}>
              <img
                src={`/assets/${dest.image}.webp`}
                alt={dest.name}
                loading="lazy"
              />
              <div>
                <p className="eyebrow red">{dest.name}</p>
                <h2>{dest.name} parks & experiences</h2>
                <ul>
                  {dest.highlights.slice(0, 3).map(([title, desc]) => (
                    <li key={title}>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
                <Link className="text-link" href={`/destinations/${dest.slug}`}>
                  Explore {dest.name}
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
