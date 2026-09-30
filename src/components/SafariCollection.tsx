import Link from 'next/link';
import { MapPin, ArrowUpRight } from 'lucide-react';

const SAFARIS = [
  {
    title: 'Best of Uganda: Wildlife, Gorillas & Culture',
    href: '/safaris/best-of-uganda-wildlife-gorillas-culture',
    days: '12 days',
    image: '/images/image21.jpg',
    category: 'Uganda · Primates',
    locations: 'Murchison Falls · Kibale · Queen Elizabeth · Bwindi · Lake Mburo',
  },
  {
    title: 'Zanzibar & Wildlife Safari',
    href: '/safaris/zanzibar-wildlife-safari',
    days: '9 days',
    image: '/images/zanzibar.jpg',
    category: 'Tanzania · Safari & beach',
    locations: 'Serengeti · Ngorongoro · Zanzibar',
  },
  {
    title: 'Amboseli & Coast Adventure',
    href: '/safaris/amboseli-coast-adventure',
    days: '5 days',
    image: '/images/image17.jpg',
    category: 'Kenya · Safari & beach',
    locations: 'Amboseli · Kenya coast',
  },
];

export default function SafariCollection() {
  return (
    <section className="section section-soft">
      <div className="section-heading">
        <div>
          <p className="eyebrow red">OUR SAFARI COLLECTION</p>
          <h2>Journeys worth looking forward to.</h2>
          <p className="section-intro">
            Explore itineraries from our collection, then make the details your own.
          </p>
        </div>
        <Link className="text-link" href="/safaris">
          Browse all safaris <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="tour-grid">
        {SAFARIS.map((s, idx) => (
          <Link key={idx} className="tour-card" href={s.href}>
            <div className="tour-photo">
              <img loading="lazy" src={s.image} alt={s.title} />
              <span>{s.days}</span>
            </div>
            <div className="tour-copy">
              <p className="eyebrow red">{s.category}</p>
              <h3>{s.title}</h3>
              <p>
                <MapPin size={14} aria-hidden="true" style={{ flexShrink: 0 }} />
                {s.locations}
              </p>
              <div className="card-bottom">
                <span>Tailored quote</span>
                <span>
                  View safari <ArrowUpRight size={17} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
