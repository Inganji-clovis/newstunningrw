import { ServiceTemplate } from '@/components/ServiceTemplate';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Bookings & Lodges | Stunning Travel & Tours Ltd',
  description: 'Reserve business hotels, luxury safari lodges and beach resorts across East Africa and worldwide.',
};

export default function HotelsPage() {
  const service = services.find((s) => s.slug === 'hotels');
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}
