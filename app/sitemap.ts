import { MetadataRoute } from 'next';
import PostManager from 'lib/PostManager';
import getConfig from 'next/config';

function generateSiteMap(host: string, slug: string, date: Date) {
  return {
    url: `${host}${slug}`,
    lastModified: date.toISOString().split('T')[0],
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const { publicRuntimeConfig } = getConfig();
  const { domain, basePath } = publicRuntimeConfig;

  const host = `https://${domain}${basePath}`;
  const allPosts = PostManager.getInstance().getAllPost();
  const allRoutes = ['', 'about'];

  const postSiteMap = allPosts.map((post) => {
    const slug = post.frontMatter.slug.join('/');
    return generateSiteMap(
      host,
      `/post/${slug}`,
      new Date(post.frontMatter.date)
    );
  });

  const routeSiteMap = allRoutes.map((route) =>
    generateSiteMap(host, route, new Date())
  );

  return [...routeSiteMap, ...postSiteMap];
}
