import { allPosts } from 'contentlayer/generated';

export default function PostCard() {
  return (
    <div className="post-card-wrapper">
      {allPosts.map((post) => (
        <div className="post-card">
          <div className="post-card-title">{post.title}</div>
          <div className="post-card-summary">{post.summary}</div>
          <div className="post-card-info">
            <div className="post-card-date">{post.date}</div>
            {post.categories.map((category) => (
              <div className="post-card-categories">{category}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
