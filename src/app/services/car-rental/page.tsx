import { ServiceTemplate } from '@/components/ServiceTemplate';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Rental & Airport Transfers | Stunning Travel & Tours Ltd',
  description: 'Reliable vehicle hire, 4x4 safari vehicles and airport transfers in Kigali and East Africa.',
};

export default function CarRentalPage() {
  const service = services.find((s) => s.slug === 'car-rental');
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}
