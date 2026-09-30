'use client';
import { useState } from 'react';
import { Plane, Globe, Compass, Hotel, Car, ArrowRight } from 'lucide-react';

const TABS = [
  { id: 'Air tickets', label: 'Air tickets', icon: Plane, placeholder: 'Flight route (e.g. Kigali to London)' },
  { id: 'Visa assistance', label: 'Visa assistance', icon: Globe, placeholder: 'Destination country for visa' },
  { id: 'Tours', label: 'Tours', icon: Compass, placeholder: 'Destination or experience (e.g. Gorillas)' },
  { id: 'Hotels', label: 'Hotels', icon: Hotel, placeholder: 'City or lodge location' },
  { id: 'Car rental', label: 'Car rental', icon: Car, placeholder: 'Pickup city & vehicle type' },
];

export default function RequestBox() {
  const [activeTab, setActiveTab] = useState('Air tickets');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentTabInfo = TABS.find((t) => t.id === activeTab) || TABS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;
    const text = `Hello Stunning Travel! I would like to inquire about:
*Service*: ${activeTab}
*Details*: ${destination}
*Travel Date*: ${date || 'Flexible'}`;
    const url = `https://wa.me/250788312724?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="request-box upgraded-request" id="request">
      <div className="service-tabs" role="tablist" aria-orientation="horizontal" style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={isActive ? 'active' : ''}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={18} aria-hidden="true" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <form className="quick-form" onSubmit={handleSubmit}>
        <label>
          Where would you like to go?
          <input
            required
            placeholder={currentTabInfo.placeholder}
            maxLength={200}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <label>
          Preferred travel date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit" className="btn">
          Start my enquiry
          <ArrowRight size={17} />
        </button>
      </form>
      <p className="form-note">
        A personal response from our Kigali team. Your enquiry is not a confirmed booking.
      </p>
    </section>
  );
}
