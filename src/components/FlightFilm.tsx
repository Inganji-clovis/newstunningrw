import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FlightFilm() {
  return (
    <section className="section flight-film">
      <article>
        <p className="eyebrow red">THE START OF SOMETHING NEW</p>
        <h2>
          Let’s get your
          <br />
          next journey moving.
        </h2>
        <p>
          From choosing your route to arranging a comfortable stay, our Kigali team helps you prepare the details.
        </p>
        <Link href="/services/flights" className="text-link">
          Explore air ticketing <ArrowUpRight size={17} />
        </Link>
      </article>
      <figure>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/flight-poster.jpg"
          aria-label="Passenger aircraft at an airport"
          suppressHydrationWarning
        >
          <source src="/assets/flight-short.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
        <figcaption>Air travel inspiration · A passenger aircraft at an airport. Silent video.</figcaption>
      </figure>
    </section>
  );
}
