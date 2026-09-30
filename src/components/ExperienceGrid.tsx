import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'Wildlife game drives',
    desc: 'Discover open landscapes and wildlife with a guided safari.',
    image: '/images/image18.jpg',
    href: '/safaris',
  },
  {
    title: 'Forest & primate journeys',
    desc: 'Explore gorilla and chimpanzee itineraries in Rwanda and Uganda.',
    image: '/images/image21.jpg',
    href: '/safaris',
  },
  {
    title: 'Waterways & scenic escapes',
    desc: 'Make time for boat excursions and slower moments along the journey.',
    image: '/images/image20.jpg',
    href: '/safaris',
  },
];

export default function ExperienceGrid() {
  return (
    <section className="section experience-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow red">EXCEPTIONAL TRAVEL EXPERIENCES</p>
          <h2>Find your way to explore.</h2>
          <p className="section-intro">
            Inspired by our East African journeys. Ask us which experiences fit your route and dates.
          </p>
        </div>
      </div>

      <div className="experience-grid">
        {EXPERIENCES.map((e, idx) => (
          <Link key={idx} href={e.href}>
            <img src={e.image} alt={e.title} loading="lazy" />
            <div>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
              <span className="text-link">
                Explore safaris <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
