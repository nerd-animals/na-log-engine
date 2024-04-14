import { MetadataRoute } from 'next';
import PostManager from 'lib/PostManager';
import getConfig from 'next/config';

function generateSiteMap(slug: string, date: Date) {
  const { publicRuntimeConfig } = getConfig();
  const { domain, basePath } = publicRuntimeConfig;

  const host = `https://${domain}${basePath}`;

  return {
    url: `${host}${slug}`,
    lastModified: date.toISOString(),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = PostManager.getInstance().getAllPost();
  const allRoutes = ['', 'about'];

  const postSiteMap = allPosts.map((post) => {
    const slug = post.frontMatter.slug.join('/');
    return generateSiteMap(`/post/${slug}`, new Date(post.frontMatter.date));
  });

  const routeSiteMap = allRoutes.map((route) =>
    generateSiteMap(route, new Date())
  );

  return [...routeSiteMap, ...postSiteMap];
}
