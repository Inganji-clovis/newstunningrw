import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function BeachBanner() {
  return (
    <section className="beach-banner">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/island-poster.webp"
        aria-label="Chumbe Island, Zanzibar, Tanzania"
        suppressHydrationWarning
      >
        <source src="/assets/zanzibar-film.mp4" type="video/mp4" />
      </video>
      <div />
      <article>
        <p className="eyebrow">A LITTLE MORE TIME TO UNWIND</p>
        <h2>
          Safari days.
          <br />
          <em>Ocean-side endings.</em>
        </h2>
        <p>
          Discover Zanzibar, Tanzania — from the heritage of Stone Town to Indian Ocean island escapes.
        </p>
        <Link className="btn light-btn" href="/safaris?type=Beach">
          Explore beach holidays <ArrowUpRight size={18} />
        </Link>
      </article>
    </section>
  );
}
