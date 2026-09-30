import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stunning Travel & Tours | Kigali',
  description: 'Air tickets, visa assistance, tours and hotel bookings with Stunning Travel & Tours Ltd in Kigali.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
