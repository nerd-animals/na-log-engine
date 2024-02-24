import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import MdxComponent from '../../_components/MdxComponent';
import '../../_styles/mdx.scss';

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
      <div className="post-category">
        {post.categories[post.categories.length - 1]}
      </div>
      <div className="post-title">{post.title}</div>
      <div className="post-info">
        <div className="post-tags">
          {post.tags
            ? post.tags.map((tag) => (
                <div className="post-tag" key={tag}>
                  {tag}
                </div>
              ))
            : null}
        </div>
        <div className="post-date">
          🗓️{' '}
          {new Date(post.date).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            weekday: 'short',
          })}
        </div>
      </div>
      <div className="post-author">
        ✍️ written by <strong>{post.author}</strong>
      </div>
      <MdxComponent code={post.body.code} />
    </div>
  );
}
