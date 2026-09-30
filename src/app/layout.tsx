import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stunning Travel & Tours | Kigali',
  description: 'Air tickets, visa assistance, tours and hotel bookings with Stunning Travel & Tours Ltd in Kigali.',
  openGraph: {
    title: 'Stunning Travel & Tours | Kigali',
    description: 'Air tickets, visa assistance, tours and hotel bookings with Stunning Travel & Tours Ltd in Kigali.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
