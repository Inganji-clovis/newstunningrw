import { SafarisClient } from './SafarisClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our safaris | Stunning Travel & Tours Ltd',
  description: 'Explore wildlife, primate and beach safaris across Rwanda, Kenya, Tanzania and Uganda.',
};

export default function SafarisPage() {
  return <SafarisClient />;
}
