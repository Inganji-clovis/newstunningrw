import { DestinationTemplate } from '@/components/DestinationTemplate';
import { destinations } from '@/data/destinations';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania & Zanzibar Travel | Stunning Travel & Tours Ltd',
  description: 'Serengeti safaris, Ngorongoro Crater and Zanzibar beach escapes coordinated from Kigali.',
};

export default function TanzaniaPage() {
  const dest = destinations.find((d) => d.slug === 'tanzania');
  if (!dest) notFound();
  return <DestinationTemplate destination={dest} />;
}
