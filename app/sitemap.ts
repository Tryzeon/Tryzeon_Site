import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tryzeon.com';
  const currentDate = new Date();

  // 定義所有頁面及其 SEO 屬性
  const pages = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/products', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/business', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/join', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/experience', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/learn-more', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/demo', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/explore', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        'zh-TW': `${baseUrl}${page.path}`,
        'en-US': `${baseUrl}/en${page.path}`,
      },
    },
  }));
}
