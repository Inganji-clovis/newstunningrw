import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ACTIVITIES = [
  {
    title: 'Guided bush walks',
    desc: 'Slow down and notice the smaller details of the landscape. Guided nature walks bring local plants, tracks and ecosystems into focus, with routes suited to the park and your walking preferences.',
  },
  {
    title: 'Boat safaris',
    desc: 'Explore river and lake habitats from the water. Consider the Nile at Murchison Falls or the Kazinga Channel as part of a Uganda journey, with time for birds and wildlife along the shores.',
  },
  {
    title: 'Balloon experiences',
    desc: 'See the plains from a different perspective. Ask about a hot-air-balloon experience on your safari route; operations depend on the destination, weather and availability.',
  },
  {
    title: 'Cultural encounters',
    desc: 'Make room for community visits and local traditions. We can discuss opportunities that fit your interests and schedule, with respectful engagement at the heart of the visit.',
  },
  {
    title: 'Night drives',
    desc: 'Discover a different side of the landscape after sunset. Where permitted, guided night drives offer the possibility of seeing nocturnal wildlife. Ask which parks and itineraries include this option.',
  },
  {
    title: 'Family & beach holidays',
    desc: 'Balance shared adventures with time to rest. Combine safari stops, suitable accommodation and a coastal stay around your family’s ages, interests and preferred pace.',
  },
];

export default function AdventurePace() {
  return (
    <section className="section section-soft">
      <div className="section-heading">
        <div>
          <p className="eyebrow red">MORE WAYS TO EXPERIENCE EAST AFRICA</p>
          <h2>Adventure, at your pace.</h2>
          <p className="section-intro">
            Choose the experiences that matter to you. We’ll help fit them into a personalised itinerary.
          </p>
        </div>
      </div>

      <div className="three-cols">
        {ACTIVITIES.map((act, idx) => (
          <article key={idx}>
            <h3>{act.title}</h3>
            <p>{act.desc}</p>
          </article>
        ))}
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <Link className="text-link" href="/safaris" style={{ fontSize: '1rem' }}>
          Build your safari <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
