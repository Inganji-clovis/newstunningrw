'use client';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function SplitFlightFeature() {
  const scrollToEnquiry = () => {
    const el = document.getElementById('request');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="split-feature section">
      <div className="feature-images">
        <img loading="lazy" src="/images/city3.jpg" alt="London skyline travel inspiration" />
        <img loading="lazy" src="/images/beachc.jpg" alt="Hotel room overlooking the ocean" />
      </div>
      <article>
        <p className="eyebrow red">BUSINESS, VISITS &amp; NEW BEGINNINGS</p>
        <h2>
          Your next flight.
          <br />
          Your next opportunity.
        </h2>
        <p>
          Travel for meetings, trade, studies, family visits or a well-earned break. Tell us your route and priorities; we’ll help you review flight options and coordinate the rest of your trip.
        </p>
        <ul className="check-list">
          <li>
            <CheckCircle2 size={22} aria-hidden="true" />
            Flight options around your dates
          </li>
          <li>
            <CheckCircle2 size={22} aria-hidden="true" />
            Visa application assistance
          </li>
          <li>
            <CheckCircle2 size={22} aria-hidden="true" />
            Hotels and onward travel arrangements
          </li>
        </ul>
        <button className="btn" onClick={scrollToEnquiry}>
          Request a flight quote <ArrowRight size={18} />
        </button>
      </article>
    </section>
  );
}
