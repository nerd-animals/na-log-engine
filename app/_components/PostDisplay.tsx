export interface Post {
  title: string;
  author: string;
  tags: string[];
  date: string;
  content: string;
}

export default function PostDisplay({ post }: { post: Post }) {
  return (
    <div className="post-wrapper">
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
      <div className="post-content">{post.content}</div>
    </div>
  );
}
