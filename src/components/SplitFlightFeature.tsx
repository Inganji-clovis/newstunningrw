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
        <img loading="lazy" src="/assets/city3.webp" alt="London skyline" />
        <img loading="lazy" src="/assets/hotel-seaview.webp" alt="A hotel room overlooking the sea" />
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            Flight options around your dates
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            Visa application assistance
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
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
