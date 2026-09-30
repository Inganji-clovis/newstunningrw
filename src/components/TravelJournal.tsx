import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const POSTS = [
  {
    country: 'Rwanda',
    title: 'Rwanda, beyond one unforgettable encounter',
    desc: 'Build a journey around primates, wildlife, the city and time to slow down.',
    image: '/images/image25.jpg',
    href: '/blog/rwanda-travel-highlights',
  },
  {
    country: 'Kenya',
    title: 'Choosing your Kenya safari route',
    desc: 'A practical starting point for the Mara, Lake Nakuru, Amboseli and the coast.',
    image: '/images/image4.jpg',
    href: '/blog/kenya-safari-planning',
  },
  {
    country: 'Uganda',
    title: 'Planning a primate journey in Uganda',
    desc: 'Bring forest experiences and wildlife stops into one considered itinerary.',
    image: '/images/image21.jpg',
    href: '/blog/uganda-primate-journey',
  },
];

export default function TravelJournal() {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p className="eyebrow red">THE TRAVEL JOURNAL</p>
          <h2>A little inspiration for the journey.</h2>
        </div>
        <Link className="text-link" href="/blog">
          All stories &amp; guides <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="journal-grid">
        {POSTS.map((post, idx) => (
          <Link key={idx} href={post.href}>
            <img loading="lazy" src={post.image} alt={post.title} />
            <article>
              <p className="eyebrow red">{post.country}</p>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <span className="text-link">
                Read story <ArrowUpRight size={16} />
              </span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
