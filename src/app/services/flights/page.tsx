import { ServiceTemplate } from '@/components/ServiceTemplate';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Air Tickets & Flights | Stunning Travel & Tours Ltd',
  description: 'Book flights with top international airlines from Kigali. Tailored fares and flexible routing.',
};

export default function FlightsPage() {
  const service = services.find((s) => s.slug === 'flights');
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}
