import { DestinationTemplate } from '@/components/DestinationTemplate';
import { destinations } from '@/data/destinations';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Safaris & Travel | Stunning Travel & Tours Ltd',
  description: 'Explore the Maasai Mara, Amboseli and the Kenya coast with custom safari itineraries.',
};

export default function KenyaPage() {
  const dest = destinations.find((d) => d.slug === 'kenya');
  if (!dest) notFound();
  return <DestinationTemplate destination={dest} />;
}
