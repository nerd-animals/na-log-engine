import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PostManager from 'lib/PostManager';
import PostViewer from '@/_components/post/PostViewer';
import Giscus from '@/_components/tools/Giscus';

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const post = PostManager.getInstance().getPost(params.slug);

  return {
    title: post?.frontMatter.title || 'Not Found',
    description: post?.frontMatter.summary || '',
    openGraph: {
      title: post?.frontMatter.title || 'Not Found',
      description: post?.frontMatter.summary || '',
    },
  };
}

export function generateStaticParams() {
  const allPosts = PostManager.getInstance().getAllPost();

  const paths = allPosts.map((post) => ({ slug: post.frontMatter.slug }));
  paths.push({ slug: ['not-found'] });
  return paths;
}

export default function Post({ params }: { params: { slug: string[] } }) {
  const post = PostManager.getInstance().getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PostViewer post={post} />
      <Giscus />
    </>
  );
}
