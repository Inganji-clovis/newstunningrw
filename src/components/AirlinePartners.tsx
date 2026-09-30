import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AirlinePartners() {
  return (
    <section className="airline-section section">
      <div className="section-heading">
        <div>
          <p className="eyebrow red">MORE WAYS TO GET THERE</p>
          <h2>Let’s find your flight.</h2>
        </div>
        <Link className="text-link" href="/airlines">
          Explore airlines <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="airline-strip">
        <span><strong>RwandAir</strong></span>
        <span><img loading="lazy" src="/assets/et-logo.webp" alt="Ethiopian Airlines" /></span>
        <span><img loading="lazy" src="/assets/kq-airline.webp" alt="Kenya Airways" /></span>
        <span><img loading="lazy" src="/assets/qr-logo.webp" alt="Qatar Airways" /></span>
        <span><img loading="lazy" src="/assets/turkish-airline.webp" alt="Turkish Airlines" /></span>
        <span><img loading="lazy" src="/assets/klm-logo.webp" alt="KLM" /></span>
      </div>
      <p className="form-note">Ask our team about available airline and route options for your journey.</p>
    </section>
  );
}
