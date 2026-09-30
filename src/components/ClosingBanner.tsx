'use client';
import { ArrowUpRight } from 'lucide-react';

export default function ClosingBanner() {
  const scrollToEnquiry = () => {
    const el = document.getElementById('request');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="closing-banner">
      <div>
        <p className="eyebrow">LET’S BRING YOUR PLANS TO LIFE</p>
        <h2>Wherever you’re going, start with us.</h2>
      </div>
      <button className="btn light-btn" onClick={scrollToEnquiry}>
        Make an enquiry <ArrowUpRight size={18} />
      </button>
    </section>
  );
}
