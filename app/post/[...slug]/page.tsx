import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import MdxComponent from '../../_components/MdxComponent';

export function generateStaticParams() {
  return allPosts.map((post) => {
    const parts = post.slug.split('/').filter((part) => part !== '');
    return { slug: parts };
  });
}

function getPost(slug: string) {
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }
  return post;
}

export default function Post({ params }: { params: { slug: string[] } }) {
  const post = getPost(params.slug.join('/'));

  return (
    <div className="post-wrapper">
      <div className="post-title">{post.title}</div>
      <MdxComponent code={post.body.code} />
    </div>
  );
}
