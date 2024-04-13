import { MetadataRoute } from 'next';
import getConfig from 'next/config';

export default function robots(): MetadataRoute.Robots {
  const { publicRuntimeConfig } = getConfig();
  const { domain, basePath } = publicRuntimeConfig;

  const host = `https://${domain}${basePath}`;

  return {
    rules: {
      userAgent: '*',
      disallow: '/write',
    },
    sitemap: `${host}/sitemap.xml`,
  };
}
