import type { MetadataRoute } from 'next';

// TODO: Update to production domain
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://longbarnhay.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/products',
    '/delivery',
    '/quote',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
