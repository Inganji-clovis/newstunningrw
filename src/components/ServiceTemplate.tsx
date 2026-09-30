import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { TourCard } from '@/components/TourCard';
import { ServiceItem } from '@/data/services';
import { safaris } from '@/data/safaris';
import { airlinesList } from '@/data/airlines';
import { ArrowRight, Phone } from 'lucide-react';

interface ServiceTemplateProps {
  service: ServiceItem;
}

export function ServiceTemplate({ service }: ServiceTemplateProps) {
  const enquiryMessage = encodeURIComponent(
    `Hello Stunning Travel, I would like assistance with ${service.title}.`
  );

  const tourSamples = [safaris[0], safaris[9] || safaris[1], safaris[16] || safaris[2]].filter(Boolean);

  return (
    <>
      <PageHero
        title={service.title}
        tag={service.tag}
        text={service.intro}
        image={service.image}
      />

      <section className="section detail-layout">
        <article className="prose-content">
          {service.sections.map(([title, content]) => (
            <section key={title} style={{ marginBottom: '32px' }}>
              <h2>{title}</h2>
              <p>{content}</p>
            </section>
          ))}

          <h2>Questions, answered.</h2>
          <div style={{ display: 'grid', gap: '16px', margin: '20px 0' }}>
            {service.faqs.map(([q, a], idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e0e5e8',
                  borderRadius: '8px',
                  padding: '18px 22px',
                  background: '#fff',
                }}
              >
                <h3 style={{ fontSize: '17px', margin: '0 0 8px', color: '#17262e' }}>{q}</h3>
                <p style={{ margin: 0, color: '#5c6b75', fontSize: '15px', lineHeight: '1.7' }}>{a}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="booking-aside">
          <p className="eyebrow red">START YOUR REQUEST</p>
          <h3>Tell us what you have in mind.</h3>
          <p>Have these details ready:</p>
          <ul>
            {service.needs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className="btn"
            href={`https://wa.me/250788312724?text=${enquiryMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Request assistance
            <ArrowRight size={17} />
          </a>
          <a className="text-link" href="tel:+250788312724">
            <Phone size={14} style={{ marginRight: '6px' }} />
            Call +250 788 312 724
          </a>
        </aside>
      </section>

      {service.slug === 'flights' && (
        <section className="section section-soft">
          <SectionHeading
            tag="YOUR AIRLINE OPTIONS"
            title="A route that works for you."
            href="/airlines"
            link="View airlines"
          />
          <div className="airline-strip">
            {airlinesList.slice(0, 6).map((item) => (
              <span key={item.name}>
                {item.logo ? (
                  <img
                    loading="lazy"
                    src={`/assets/${item.logo}.webp`}
                    alt={item.name}
                  />
                ) : (
                  <strong>{item.name}</strong>
                )}
              </span>
            ))}
          </div>
        </section>
      )}

      {service.slug === 'tours' && (
        <section className="section section-soft">
          <SectionHeading
            tag="START EXPLORING"
            title="Browse our safari collection."
            href="/safaris"
            link="All safaris"
          />
          <div className="tour-grid">
            {tourSamples.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
