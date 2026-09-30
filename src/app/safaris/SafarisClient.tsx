'use client';

import { useState, useEffect } from 'react';
import { PageHero } from '@/components/PageHero';
import { TourCard } from '@/components/TourCard';
import { safaris } from '@/data/safaris';
import { destinations } from '@/data/destinations';
import { Search } from 'lucide-react';

export function SafarisClient() {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('All countries');
  const [experience, setExperience] = useState('All experiences');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const typeParam = new URLSearchParams(window.location.search).get('type');
      if (typeParam && ['Primates', 'Wildlife', 'Beach', 'Safari & beach'].includes(typeParam)) {
        setExperience(typeParam);
      }
    }
  }, []);

  const filteredSafaris = safaris.filter((tour) => {
    const countryName = destinations.find((d) => d.slug === tour.country)?.name || tour.country;
    const matchesCountry = country === 'All countries' || countryName.toLowerCase() === country.toLowerCase();
    const matchesExperience = experience === 'All experiences' || tour.kind.toLowerCase() === experience.toLowerCase();
    const searchTarget = `${tour.title} ${tour.route} ${tour.kind} ${countryName}`.toLowerCase();
    const matchesSearch = !search || searchTarget.includes(search.toLowerCase());

    return matchesCountry && matchesExperience && matchesSearch;
  });

  return (
    <>
      <PageHero
        title="Our safari experiences"
        tag="EXPLORE AFRICA WITH STUNNING"
        text="From a day in Akagera to a longer journey across wildlife parks and island shores. Explore our collection and let us tailor the details."
        image="image14"
      />

      <section className="section">
        <div className="catalog-filters">
          <label className="catalog-search">
            <Search size={18} />
            <input
              placeholder="Search safaris, parks or experiences"
              aria-label="Search safaris"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#68767d', marginBottom: '6px' }}>Destination</label>
            <select
              className="choice-trigger"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{
                width: '100%',
                height: '47px',
                padding: '0 14px',
                border: '1px solid #dce1e4',
                borderRadius: '5px',
                background: '#fff',
                fontSize: '14px',
                color: '#17262e',
              }}
            >
              <option value="All countries">All countries</option>
              {destinations.map((d) => (
                <option key={d.slug} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', color: '#68767d', marginBottom: '6px' }}>Experience</label>
            <select
              className="choice-trigger"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              style={{
                width: '100%',
                height: '47px',
                padding: '0 14px',
                border: '1px solid #dce1e4',
                borderRadius: '5px',
                background: '#fff',
                fontSize: '14px',
                color: '#17262e',
              }}
            >
              <option value="All experiences">All experiences</option>
              <option value="Primates">Primates</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Beach">Beach</option>
              <option value="Safari & beach">Safari & beach</option>
            </select>
          </div>
        </div>

        <p className="results-count">
          {filteredSafaris.length} itineraries · Each trip is quoted for your dates and group.
        </p>

        {filteredSafaris.length > 0 ? (
          <div className="tour-grid">
            {filteredSafaris.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h3>No matching safaris</h3>
            <p>Try a different destination or search term.</p>
            <button
              className="btn"
              onClick={() => {
                setSearch('');
                setCountry('All countries');
                setExperience('All experiences');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
