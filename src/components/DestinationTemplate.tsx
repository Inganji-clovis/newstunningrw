import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { TourCard } from '@/components/TourCard';
import { DestinationItem } from '@/data/destinations';
import { safaris } from '@/data/safaris';
import { ArrowUpRight } from 'lucide-react';

interface DestinationTemplateProps {
  destination: DestinationItem;
}

const captions: Record<string, { main: string; secondary: string }> = {
  rwanda: {
    main: 'Mountain gorilla · Rwanda travel inspiration',
    secondary: 'Golden monkey · Rwanda travel inspiration',
  },
  kenya: {
    main: 'Elephants in Kenya',
    secondary: 'Nairobi · Kenya',
  },
  tanzania: {
    main: 'Mount Kilimanjaro · Tanzania',
    secondary: 'Chumbe Island, Zanzibar · Tanzania',
  },
  uganda: {
    main: 'Murchison Falls National Park · Uganda',
    secondary: 'Mountain gorilla · Uganda',
  },
};

export function DestinationTemplate({ destination }: DestinationTemplateProps) {
  const countrySafaris = safaris.filter((s) => s.country === destination.slug);
  const captionData = captions[destination.slug] || {
    main: `${destination.name} travel inspiration`,
    secondary: `${destination.name} landscape`,
  };

  const enquiryMessage = encodeURIComponent(
    `Hello Stunning Travel, I would like to enquire about travel to ${destination.name}.`
  );

  return (
    <>
      <PageHero
        title={destination.name}
        tag={destination.tag}
        text={destination.intro}
        image={destination.image}
        breadcrumb="Destinations"
      />

      <div className="anchor-nav">
        <a href="#highlights">Highlights</a>
        <a href="#planning">Planning your trip</a>
        <a href="#country-safaris">Safaris</a>
        <a
          href={`https://wa.me/250788312724?text=${enquiryMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enquire now
          <ArrowUpRight size={15} />
        </a>
      </div>

      <section className="section" id="highlights">
        <SectionHeading
          tag={`EXPLORE ${destination.name.toUpperCase()}`}
          title="A destination with more to discover."
        />
        <div className="country-detail-grid">
          <div>
            {destination.highlights.map(([title, desc]) => (
              <article key={title} style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '22px', marginBottom: '8px', color: '#17262e' }}>{title}</h3>
                <p style={{ color: '#5d6d75', fontSize: '15px', lineHeight: '1.75' }}>{desc}</p>
              </article>
            ))}
          </div>

          <div className="travel-gallery">
            <figure style={{ margin: 0, position: 'relative' }}>
              <img
                src={`/assets/${destination.image}.webp`}
                alt={captionData.main}
                style={{ objectFit: 'cover', width: '100%', height: '340px', borderRadius: '8px 8px 0 0' }}
              />
              <figcaption
                style={{
                  color: '#fff',
                  background: 'linear-gradient(transparent, rgba(14,38,57,0.85))',
                  padding: '30px 18px 14px',
                  fontSize: '13px',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              >
                {captionData.main}
              </figcaption>
            </figure>
            {destination.image2 && (
              <figure style={{ margin: 0, position: 'relative' }}>
                <img
                  src={`/assets/${destination.image2}.webp`}
                  alt={captionData.secondary}
                  style={{ objectFit: 'cover', width: '100%', height: '240px', borderRadius: '0 0 8px 8px' }}
                />
                <figcaption
                  style={{
                    color: '#fff',
                    background: 'linear-gradient(transparent, rgba(14,38,57,0.85))',
                    padding: '30px 18px 14px',
                    fontSize: '13px',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  {captionData.secondary}
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </section>

      <section className="section planning-section" id="planning">
        <SectionHeading
          tag="BEFORE YOU GO"
          title="Bring the details together."
        />
        <div className="three-cols">
          <article>
            <h3>Arrival & connections</h3>
            <p>{destination.arrival}</p>
          </article>
          <article>
            <h3>Your pace & priorities</h3>
            <p>
              Let us know your group size, interests, preferred accommodation and how much time you have. We’ll discuss a route that fits your plans.
            </p>
          </article>
          <article>
            <h3>Documents & arrangements</h3>
            <p>
              Entry requirements depend on your nationality and journey. Ask our team about visa assistance and confirm any permits or special arrangements before booking.
            </p>
            <Link className="text-link" href="/services/visas">
              Visa assistance
              <ArrowUpRight size={15} />
            </Link>
          </article>
        </div>
      </section>

      {countrySafaris.length > 0 && (
        <section className="section" id="country-safaris">
          <SectionHeading
            tag="FIND YOUR JOURNEY"
            title={`Our ${destination.name} safari collection.`}
          />
          <div className="tour-grid">
            {countrySafaris.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
