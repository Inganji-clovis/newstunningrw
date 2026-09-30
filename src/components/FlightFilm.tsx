import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FlightFilm() {
  return (
    <section className="flight-film section" style={{ padding: 0 }}>
      <article>
        <p className="eyebrow red">THE START OF SOMETHING NEW</p>
        <h2>
          Let’s get your
          <br />
          next journey moving.
        </h2>
        <p>
          From choosing your route to arranging a comfortable stay, our Kigali team helps you prepare the details.
        </p>
        <Link href="/services/flights" className="text-link" style={{ color: '#fff' }}>
          Explore air ticketing <ArrowUpRight size={17} />
        </Link>
      </article>
      <figure style={{ position: 'relative', overflow: 'hidden', minHeight: '380px' }}>
        <img
          src="/images/Airbus A350.jpg"
          alt="Modern passenger aircraft"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <figcaption
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1.5rem',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.7)',
            background: 'rgba(0,0,0,0.5)',
            padding: '0.25rem 0.6rem',
            borderRadius: '4px',
          }}
        >
          Air travel inspiration · Modern commercial aviation with international airline partners.
        </figcaption>
      </figure>
    </section>
  );
}
