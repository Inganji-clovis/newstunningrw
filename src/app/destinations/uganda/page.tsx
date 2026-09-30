import { DestinationTemplate } from '@/components/DestinationTemplate';
import { destinations } from '@/data/destinations';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uganda Gorillas & Wildlife | Stunning Travel & Tours Ltd',
  description: 'Plan gorilla trekking in Bwindi, chimpanzee tracking in Kibale and Murchison Falls safaris.',
};

export default function UgandaPage() {
  const dest = destinations.find((d) => d.slug === 'uganda');
  if (!dest) notFound();
  return <DestinationTemplate destination={dest} />;
}
