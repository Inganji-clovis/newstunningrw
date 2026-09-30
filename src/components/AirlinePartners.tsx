import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const AIRLINES = [
  { name: 'RwandAir', textLogo: true },
  { name: 'Ethiopian Airlines', image: '/images/ET logo.jpg' },
  { name: 'Kenya Airways', image: '/images/kq airline.jpg' },
  { name: 'Qatar Airways', image: '/images/qr logo.png' },
  { name: 'Turkish Airlines', image: '/images/turkish airline.jpg' },
  { name: 'KLM', image: '/images/klm logo.jpg' },
];

export default function AirlinePartners() {
  return (
    <section className="airline-section section">
      <div className="section-heading" style={{ marginBottom: '1.5rem' }}>
        <div>
          <p className="eyebrow red">MORE WAYS TO GET THERE</p>
          <h2>Let’s find your flight.</h2>
        </div>
        <Link className="text-link" href="/airlines">
          Explore airlines <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="airline-strip">
        {AIRLINES.map((a, idx) => (
          <span key={idx}>
            {a.textLogo ? (
              <strong style={{ fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#111' }}>{a.name}</strong>
            ) : (
              <img
                loading="lazy"
                src={a.image}
                alt={a.name}
                style={{ maxHeight: '32px', width: 'auto', objectFit: 'contain' }}
              />
            )}
          </span>
        ))}
      </div>
      <p className="form-note">
        Ask our team about available airline and route options for your journey.
      </p>
    </section>
  );
}
