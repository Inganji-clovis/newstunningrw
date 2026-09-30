'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { blogPosts } from '@/data/blog';
import { Search, ArrowUpRight } from 'lucide-react';

export function BlogClient() {
  const [search, setSearch] = useState('');

  const filtered = blogPosts.filter((post) =>
    `${post.title} ${post.category}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHero
        title="Stories for the curious traveler."
        tag="THE TRAVEL JOURNAL"
        text="Destination inspiration and practical starting points for your next journey."
        image="image20"
      />

      <section className="section">
        <label className="catalog-search blog-search">
          <Search size={18} />
          <input
            aria-label="Search travel stories"
            placeholder="Search stories or destinations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <div className="journal-grid">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <img src={`/assets/${post.image}.webp`} alt="" loading="lazy" />
              <article>
                <p className="eyebrow red">{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="text-link">
                  Read story
                  <ArrowUpRight size={16} />
                </span>
              </article>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty">
            <h3>No matching stories</h3>
            <p>Try another search keyword.</p>
          </div>
        )}
      </section>
    </>
  );
}
