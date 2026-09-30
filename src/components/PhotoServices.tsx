import Link from 'next/link';
import { Plane, Globe, Hotel, Compass, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    href: '/services/flights',
    image: '/assets/et.webp',
    icon: Plane,
    title: 'Air tickets',
    desc: 'From business trips and family visits to study journeys and holidays, we help you find flight options that fit your route, dates and budget.',
  },
  {
    href: '/services/visas',
    image: '/assets/visa-preparation.webp',
    icon: Globe,
    title: 'Visa assistance',
    desc: 'Get help organising your visa application around your destination, nationality and reason for travel. We explain the next steps and the information needed for your request.',
  },
  {
    href: '/services/hotels',
    image: '/assets/hotel-seaview.webp',
    icon: Hotel,
    title: 'Hotel bookings',
    desc: 'Business hotels, safari lodges and beach stays — we help you arrange accommodation around your itinerary and the way you like to travel.',
  },
  {
    href: '/services/tours',
    image: '/assets/mara-elephants.webp',
    icon: Compass,
    title: 'Tour operations',
    desc: 'Explore Rwanda, Uganda, Kenya and Tanzania with an itinerary built around wildlife, landscapes, culture and time to enjoy the journey.',
  },
];

export default function PhotoServices() {
  return (
    <section className="section section-soft">
      <div className="section-heading">
        <div>
          <p className="eyebrow red">MORE THAN A TICKET</p>
          <h2>Travel, made easier.</h2>
        </div>
        <Link className="text-link" href="/travel-assistance">
          All travel services <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="photo-service-grid">
        {SERVICES.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Link key={idx} href={s.href}>
              <div className="service-photo">
                <img loading="lazy" src={s.image} alt={s.title} />
              </div>
              <article>
                <Icon size={23} aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="text-link">
                  Explore service <ArrowUpRight size={16} />
                </span>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
