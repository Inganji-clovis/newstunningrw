'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  emTitle: string;
  desc: string;
  btnText: string;
  linkText: string;
  linkHref: string;
}

const SLIDES: Slide[] = [
  {
    image: '/images/city3.jpg',
    alt: 'Dubai skyline at dusk',
    eyebrow: 'AIR TICKETS · VISA ASSISTANCE · HOTELS',
    title: 'Your next journey',
    emTitle: 'starts in Kigali.',
    desc: 'Business, family visits or a new adventure. Let’s bring your travel plans together.',
    btnText: 'Find my flight',
    linkText: 'Explore more',
    linkHref: '/services/flights',
  },
  {
    image: '/images/image21.jpg',
    alt: 'Mountain gorilla in Rwanda bamboo forest',
    eyebrow: 'RWANDA · GORILLA EXPERIENCES',
    title: 'Some encounters',
    emTitle: 'stay with you.',
    desc: 'Discover our primate journeys and plan a safari around your interests.',
    btnText: 'Plan a gorilla safari',
    linkText: 'Explore more',
    linkHref: '/destinations/rwanda',
  },
  {
    image: '/images/image4.jpg',
    alt: 'Elephants in an East African savanna landscape',
    eyebrow: 'KENYA · TANZANIA · UGANDA · RWANDA',
    title: 'Open horizons.',
    emTitle: 'Extraordinary journeys.',
    desc: 'Explore wildlife safaris, scenic routes and experiences across East Africa.',
    btnText: 'Plan my safari',
    linkText: 'Explore more',
    linkHref: '/safaris',
  },
  {
    image: '/images/beach1.jpg',
    alt: 'Turquoise ocean and tropical island coastline in Zanzibar',
    eyebrow: 'BEACH HOLIDAYS · ISLAND STAYS',
    title: 'Take a little time',
    emTitle: 'for the ocean.',
    desc: 'Combine your safari with a beach escape, or make relaxation the whole plan.',
    btnText: 'Plan a beach escape',
    linkText: 'Explore more',
    linkHref: '/safaris?type=Beach',
  },
];

export default function JourneyHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToEnquiry = () => {
    const el = document.getElementById('request');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative journey-carousel" role="region" aria-roledescription="carousel" aria-label="Explore travel experiences">
      <div className="overflow-hidden" style={{ height: '100%' }}>
        <div
          className="journey-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              role="group"
              aria-roledescription="slide"
              className="journey-slide"
              aria-hidden={current !== idx}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              <div className="journey-shade" />
              <article>
                <p className="eyebrow">{slide.eyebrow}</p>
                {idx === 0 ? (
                  <h1>
                    {slide.title}
                    <br />
                    <em>{slide.emTitle}</em>
                  </h1>
                ) : (
                  <h2>
                    {slide.title}
                    <br />
                    <em>{slide.emTitle}</em>
                  </h2>
                )}
                <p>{slide.desc}</p>
                <div className="hero-buttons">
                  <button className="btn" onClick={scrollToEnquiry}>
                    {slide.btnText}
                    <ArrowUpRight size={18} />
                  </button>
                  <Link className="hero-link" href={slide.linkHref}>
                    {slide.linkText}
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        className="carousel-btn prev"
        aria-label="Previous slide"
        onClick={() => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        className="carousel-btn next"
        aria-label="Next slide"
        onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
      >
        <ChevronRight size={22} />
      </button>

      {/* Progress dots */}
      <div className="journey-progress" aria-hidden="true">
        {SLIDES.map((_, idx) => (
          <span
            key={idx}
            className={current === idx ? 'active' : ''}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
