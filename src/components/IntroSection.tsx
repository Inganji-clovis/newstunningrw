import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="intro-row section">
      <div>
        <p className="eyebrow red">YOUR JOURNEY. OUR PERSONAL ATTENTION.</p>
        <h2>
          A travel partner for
          <br />
          <em>every kind of journey.</em>
        </h2>
      </div>
      <div>
        <p>
          Some journeys start with a business opportunity. Others begin with a dream of seeing mountain gorillas, exploring the savannah or slowing down beside the ocean.
        </p>
        <p>
          At Stunning Travel &amp; Tours Ltd, we bring your flights, visa assistance, tours and accommodation together. From Kigali to East Africa and destinations around the world, we help turn your plans into a clear itinerary.
        </p>
        <Link href="/about" className="text-link">
          Get to know Stunning <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
