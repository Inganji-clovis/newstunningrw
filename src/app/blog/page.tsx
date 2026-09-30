import Link from 'next/link';
import Navbar from '@/components/Navbar';
import RichFooter from '@/components/RichFooter';
import ClosingBanner from '@/components/ClosingBanner';
import { ArrowUpRight } from 'lucide-react';

const ARTICLES = [
  {
    country: 'Rwanda',
    slug: 'rwanda-travel-highlights',
    title: 'Rwanda, beyond one unforgettable encounter',
    desc: 'While mountain gorillas remain Rwanda’s most celebrated wildlife encounter, the country offers vibrant cultural heritage, serene Lake Kivu retreats, and extraordinary savannah conservation in Akagera.',
    image: '/assets/image25.webp',
    date: 'Travel Guide · 6 min read',
  },
  {
    country: 'Kenya',
    slug: 'kenya-safari-planning',
    title: 'Choosing your Kenya safari route',
    desc: 'From the iconic river crossings in the Maasai Mara to the dramatic elephant landscapes beneath Mount Kilimanjaro in Amboseli, explore our expert recommendations for routing your Kenyan expedition.',
    image: '/assets/mara-elephants.webp',
    date: 'Safari Route · 8 min read',
  },
  {
    country: 'Uganda',
    slug: 'uganda-primate-journey',
    title: 'Planning a primate journey in Uganda',
    desc: 'Bring habituated chimpanzee tracking in Kibale and mountain gorilla trekking in Bwindi into one seamless journey with river cruises on the Nile at Murchison Falls.',
    image: '/assets/image21.webp',
    date: 'Itinerary Planning · 7 min read',
  },
  {
    country: 'Tanzania',
    slug: 'zanzibar-beach-and-spice',
    title: 'From the Serengeti to the Spice Island of Zanzibar',
    desc: 'How to combine thrilling game drives in northern Tanzania with tranquil tropical beach relaxation in Stone Town and Kendwa Beach.',
    image: '/assets/island-poster.webp',
    date: 'Bush & Beach · 5 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Travel stories &amp; guides</span>
        </div>

        <section className="page-hero">
          <img src="/assets/mara-elephants.webp" alt="Travel stories" />
          <div />
          <article>
            <p className="eyebrow">THE TRAVEL JOURNAL</p>
            <h1>Inspiration for your next journey.</h1>
            <p>
              Destination guides, practical safari planning advice, and regional stories curated by our travel specialists in Kigali.
            </p>
          </article>
        </section>

        <section className="section">
          <div className="journal-grid">
            {ARTICLES.map((a) => (
              <a
                key={a.slug}
                href={`https://wa.me/250788312724?text=${encodeURIComponent(`Hello Stunning Travel! I was reading your guide on "${a.title}" and would like to ask some questions.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy" src={a.image} alt={a.title} />
                <article>
                  <p className="eyebrow red">{a.country} · {a.date}</p>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className="text-link">
                    Inquire on WhatsApp <ArrowUpRight size={16} />
                  </span>
                </article>
              </a>
            ))}
          </div>
        </section>
      </main>
      <ClosingBanner />
      <RichFooter />
    </>
  );
}
