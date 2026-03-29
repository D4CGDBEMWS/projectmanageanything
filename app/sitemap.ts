import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://projectmanageanything.com'
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/pillars`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/foundation`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/community`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.7 },
  ]
}
