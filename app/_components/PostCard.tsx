import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export default function PostCard() {
  return (
    <div className="post-card-wrapper">
      {allPosts.map((post) => (
        <Link className="post-card" href={`/post/${post.slug}`} key={post._id}>
          <div className="post-card-categories">{post.categories.pop()}</div>
          <div className="post-card-title">{post.title}</div>
          <div className="post-card-summary">{post.summary}</div>
          <div className="post-card-info">
            <div className="post-card-tags">
              {post.tags
                ? post.tags.map((tag) => (
                    <div className="post-card-tag" key={tag}>
                      {tag}
                    </div>
                  ))
                : null}
            </div>
            <div className="post-card-date">
              {new Date(post.date).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                weekday: 'short',
              })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
