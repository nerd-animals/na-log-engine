// tags 현재 기본 구현을 위해 string으로 출력되는 것으로 돼있습니다. 추후 array로 변경해야합니다.
export interface Post {
  title: string;
  author: string;
  tags: string;
  date: string;
  content: string;
}

export default function PostDisplay({ post }: { post: Post }) {
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
