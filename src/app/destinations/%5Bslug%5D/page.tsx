import { DestinationTemplate } from '@/components/DestinationTemplate';
import { destinations } from '@/data/destinations';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return { title: 'Destination Not Found | Stunning Travel & Tours Ltd' };

  return {
    title: `${dest.name} | Stunning Travel & Tours Ltd`,
    description: dest.intro,
  };
}

export default async function DynamicDestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();
  return <DestinationTemplate destination={dest} />;
}
