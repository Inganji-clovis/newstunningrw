import Link from 'next/link';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { SafariItem } from '@/data/safaris';

export function TourCard({ tour }: { tour: SafariItem }) {
  const imgSrc = tour.image.startsWith('/assets') ? tour.image : `/assets/${tour.image}.webp`;
  const countryFormatted = tour.country.charAt(0).toUpperCase() + tour.country.slice(1);

  return (
    <Link className="tour-card" href={`/safaris/${tour.slug}`}>
      <div className="tour-photo">
        <img loading="lazy" src={imgSrc} alt={tour.title} />
        <span>{tour.days} {tour.days === 1 ? 'day' : 'days'}</span>
      </div>
      <div className="tour-copy">
        <p className="eyebrow red">{countryFormatted} · {tour.kind}</p>
        <h3>{tour.title}</h3>
        <p>
          <MapPin size={14} />
          {tour.route}
        </p>
        <div className="card-bottom">
          <span>Tailored quote</span>
          <span>
            View safari <ArrowUpRight size={17} />
          </span>
        </div>
      </div>
    </Link>
  );
}
