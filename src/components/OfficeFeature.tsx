import { MapPin, ArrowUpRight } from 'lucide-react';

export function OfficeFeature() {
  const googleMapsUrl = 'https://maps.google.com/?q=CHIC+Building+Kigali+Rwanda';

  return (
    <section className="section office-feature">
      <img
        src="/assets/office-front.webp"
        alt="The branded entrance to Stunning Travel & Tours Ltd in Kigali"
        loading="lazy"
      />
      <article>
        <p className="eyebrow red">A REAL TEAM. A PLACE TO MEET.</p>
        <h2>
          Visit your travel team
          <br />
          in Kigali.
        </h2>
        <p>
          Come in to discuss a flight, work through your travel plans or build your next safari with us. We bring air tickets, visa assistance, accommodation and ground transport into one conversation.
        </p>
        <p>
          <strong>CHIC Building · Basement Floor -3 · AE01</strong>
          <br />
          Use Gate 4, near Inyange Distributors.
        </p>
        <a
          className="btn"
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find us on Google Maps
          <ArrowUpRight size={18} />
        </a>
      </article>
    </section>
  );
}
