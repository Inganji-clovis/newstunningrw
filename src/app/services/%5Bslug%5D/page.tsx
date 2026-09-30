import { ServiceTemplate } from '@/components/ServiceTemplate';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found | Stunning Travel & Tours Ltd' };

  return {
    title: `${service.title} | Stunning Travel & Tours Ltd`,
    description: service.intro,
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}
