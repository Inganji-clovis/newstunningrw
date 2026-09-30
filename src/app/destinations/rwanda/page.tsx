import { DestinationTemplate } from '@/components/DestinationTemplate';
import { destinations } from '@/data/destinations';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rwanda Travel & Safaris | Stunning Travel & Tours Ltd',
  description: 'Plan gorilla trekking, wildlife tours and stays in Rwanda with our Kigali-based team.',
};

export default function RwandaPage() {
  const dest = destinations.find((d) => d.slug === 'rwanda');
  if (!dest) notFound();
  return <DestinationTemplate destination={dest} />;
}
