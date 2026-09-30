import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { TourCard } from '@/components/TourCard';
import { safaris } from '@/data/safaris';
import { destinations } from '@/data/destinations';
import { Clock, MapPin, Compass, ArrowUpRight, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return safaris.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = safaris.find((t) => t.slug === slug);
  if (!tour) return { title: 'Safari Not Found | Stunning Travel & Tours Ltd' };

  return {
    title: `${tour.title} | Stunning Travel & Tours Ltd`,
    description: tour.route,
  };
}

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = safaris.find((t) => t.slug === slug);
  if (!tour) notFound();

  const dest = destinations.find((d) => d.slug === tour.country);
  const countryName = dest ? dest.name : tour.country.charAt(0).toUpperCase() + tour.country.slice(1);
  const relatedTours = safaris.filter((t) => t.country === tour.country && t.slug !== tour.slug).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Stunning Travel, I'm interested in the ${tour.days}-day ${tour.title} safari.`
  );

  return (
    <>
      <PageHero
        title={tour.title}
        tag={`${tour.days} ${tour.days === 1 ? 'DAY' : 'DAYS'} · ${countryName.toUpperCase()} · ${tour.kind.toUpperCase()}`}
        text={tour.route}
        image={tour.image}
        breadcrumb="Safaris"
      />

      <div className="section detail-layout">
        <article className="prose-content">
          <h2>Your safari at a glance</h2>
          <p>
            Explore {tour.route.replaceAll(' · ', ' and ')} on a {tour.days}-day journey from our {countryName} collection. Use this itinerary as your starting point, then discuss the dates, accommodation and pace that suit your group.
          </p>

          <div className="fact-grid">
            <div>
              <Clock size={21} />
              <small>Duration</small>
              <strong>
                {tour.days} {tour.days === 1 ? 'day' : 'days'}
              </strong>
            </div>
            <div>
              <MapPin size={21} />
              <small>Destination</small>
              <strong>{countryName}</strong>
            </div>
            <div>
              <Compass size={21} />
              <small>Experience</small>
              <strong>{tour.kind}</strong>
            </div>
          </div>

          {tour.itinerary && tour.itinerary.length > 0 ? (
            <>
              <h2>Itinerary outline</h2>
              <div style={{ display: 'grid', gap: '16px', margin: '20px 0' }}>
                {tour.itinerary.map(([dayTitle, dayDesc], i) => (
                  <div
                    key={i}
                    style={{
                      border: '1px solid #e0e5e8',
                      borderRadius: '8px',
                      padding: '18px 22px',
                      background: '#fff',
                    }}
                  >
                    <h3 style={{ fontSize: '18px', margin: '0 0 8px', color: '#17262e' }}>{dayTitle}</h3>
                    <p style={{ margin: 0, color: '#5c6b75', fontSize: '15px', lineHeight: '1.7' }}>{dayDesc}</p>
                  </div>
                ))}
              </div>
              <p className="form-note">
                The final schedule and accommodation are confirmed in your personalised proposal.
              </p>
            </>
          ) : (
            <>
              <h2>Shape the journey around you</h2>
              <p>
                Tell us your arrival point, preferred dates and the experiences you want to prioritise. Our team will prepare the day-by-day plan and confirm the practical arrangements before you book.
              </p>
            </>
          )}

          <h2>What we’ll confirm in your quote</h2>
          <ul>
            <li>The final route and daily activities</li>
            <li>Accommodation choices and meal arrangements</li>
            <li>Transport, guiding and transfers</li>
            <li>Any relevant permits, park fees and optional activities</li>
            <li>Payment terms, availability and cancellation conditions</li>
          </ul>

          <p>
            Flights, visas and extra nights can be discussed alongside your safari. No price or availability is confirmed until our team has reviewed your request.
          </p>

          <h2>Make it your own</h2>
          <p>
            Would you prefer more wildlife time, fewer transfers or a beach extension? Share your priorities in the enquiry. Wildlife sightings are never guaranteed, and trekking or park activities depend on the arrangements confirmed for your dates.
          </p>
        </article>

        <aside className="booking-aside">
          <p className="eyebrow red">LET’S PLAN YOUR SAFARI</p>
          <h3>
            {tour.days} {tour.days === 1 ? 'day' : 'days'}. Your kind of adventure.
          </h3>
          <p>Get a proposal based on your dates, group size and preferences.</p>
          <a
            className="btn"
            href={`https://wa.me/250788312724?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire about this safari
            <ArrowRight size={17} />
          </a>
          <a
            href="https://wa.me/250788312724"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn"
          >
            <img
              className="social-brand-mark"
              src="/assets/whatsapp.svg"
              width={18}
              height={18}
              alt=""
            />
            Ask on WhatsApp
          </a>
          <Link href={`/destinations/${tour.country}`} className="text-link">
            Explore {countryName}
            <ArrowUpRight size={17} />
          </Link>
        </aside>
      </div>

      {relatedTours.length > 0 && (
        <section className="section section-soft">
          <SectionHeading
            tag="KEEP EXPLORING"
            title={`More journeys in ${countryName}.`}
          />
          <div className="tour-grid">
            {relatedTours.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
