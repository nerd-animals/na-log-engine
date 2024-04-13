import { MetadataRoute } from 'next';
import getConfig from 'next/config';

export default function robots(): MetadataRoute.Robots {
  const { publicRuntimeConfig } = getConfig();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/write',
    },
    sitemap: `https://${publicRuntimeConfig.domain}/${publicRuntimeConfig.basePath}/sitemap.xml`,
  };
}
