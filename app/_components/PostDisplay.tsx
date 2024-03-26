export default function PostDisplay({ post }: any) {
  return (
    <div className="post-wrapper">
      <div className="post-title">{post.title}</div>
      <div className="post-info">
        <div className="post-tag">{post.tags}</div>
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
