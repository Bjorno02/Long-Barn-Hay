import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { siteConfig } from '@/lib/siteConfig';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.tagline,
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: siteConfig.companyName,
    description:
      'Full-service hay supplier in Chester, NH. Quality 1st and 2nd cut hay with delivery, unloading, and stacking services.',
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/photos/LongBarnLogo.jpg',
        width: 800,
        height: 600,
        alt: 'Long Barn Hay Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.companyName,
    description: 'Full-service hay supplier in Chester, NH. Quality 1st and 2nd cut hay.',
    images: ['/photos/LongBarnLogo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#dc2626',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.companyName,
  description:
    'Full-service hay supplier offering quality 1st and 2nd cut hay with delivery, unloading, and stacking services.',
  url: siteConfig.siteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.contactEmail,
  image: `${siteConfig.siteUrl}/photos/LongBarnLogo.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zipCode,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.coordinates.lat,
    longitude: siteConfig.coordinates.lng,
  },
  hasMap: `https://www.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`,
  areaServed: {
    '@type': 'State',
    name: 'New Hampshire',
  },
  sameAs: [siteConfig.facebookUrl],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
