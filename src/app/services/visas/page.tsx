import { ServiceTemplate } from '@/components/ServiceTemplate';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Assistance | Stunning Travel & Tours Ltd',
  description: 'Expert guidance and support for visa applications and travel documentation from Kigali.',
};

export default function VisasPage() {
  const service = services.find((s) => s.slug === 'visas');
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}
