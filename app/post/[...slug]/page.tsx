import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return allPosts.map((post) => {
    const parts = post.slugAsParams.split('/').filter(part => part !== '');
    return { slug: parts };
  });
}

function getPost(slug: string) {
  const post = allPosts.find((p) => p.slugAsParams === slug);

  if (!post) {
    notFound();
  }
  return post;
}

export default function Post({ params }: { params: { slug: string[] } }) {
  const post = getPost(params.slug.join('/'));

  return (
    <div>
      <div>_id : {post._id}</div>
      <div>title : {post.title}</div>
      <div>flattenedPath : {post._raw.flattenedPath}</div>
      <div>date : {post.date}</div>
      <div>slug : {post.slug}</div>
      <div>body.raw : {post.body.raw}</div>
      <div>body.html : {post.body.html}</div>
    </div>
  );
}
