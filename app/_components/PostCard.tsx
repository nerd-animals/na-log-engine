import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export default function PostCard() {
  return (
    <div className="post-card-wrapper">
      {allPosts.map((post) => (
        <div>
          <Link
            className="post-card"
            href={`/post/${post.slug}`}
            key={post._id}
          >
            <div className="post-card-title">{post.title}</div>
            <div className="post-card-summary">{post.summary}</div>
            <div className="post-card-info">
              <div className="post-card-date">{post.date}</div>
              <div className="post-card-categories">
                {post.categories.map((category) => (
                  <div className="post-card-category">{category}.</div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
