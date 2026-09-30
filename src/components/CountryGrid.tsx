import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const COUNTRIES = [
  {
    name: 'Rwanda',
    href: '/destinations/rwanda',
    image: '/images/image1.jpg',
  },
  {
    name: 'Kenya',
    href: '/destinations/kenya',
    image: '/images/image4.jpg',
  },
  {
    name: 'Tanzania',
    href: '/destinations/tanzania',
    image: '/images/image3.jpg',
  },
  {
    name: 'Uganda',
    href: '/destinations/uganda',
    image: '/images/uganda f.jpg',
  },
];

export default function CountryGrid() {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p className="eyebrow red">FOUR COUNTRIES. COUNTLESS POSSIBILITIES.</p>
          <h2>Discover the heart of East Africa.</h2>
          <p className="section-intro">
            Forest encounters, open plains and Indian Ocean escapes. Find your starting point.
          </p>
        </div>
        <Link className="text-link" href="/destinations">
          View destinations <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="country-grid">
        {COUNTRIES.map((c) => (
          <Link key={c.name} className="country-card" href={c.href}>
            <img loading="lazy" src={c.image} alt={`${c.name} travel inspiration`} />
            <div />
            <section>
              <div>
                <span>EXPLORE</span>
                <h3>{c.name}</h3>
              </div>
              <ArrowUpRight size={24} aria-hidden="true" />
            </section>
          </Link>
        ))}
      </div>
    </section>
  );
}
