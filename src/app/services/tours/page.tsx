import { ServiceTemplate } from '@/components/ServiceTemplate';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tour Operations & Safaris | Stunning Travel & Tours Ltd',
  description: 'Custom safari packages, gorilla trekking and wildlife adventures throughout East Africa.',
};

export default function ToursPage() {
  const service = services.find((s) => s.slug === 'tours');
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}
