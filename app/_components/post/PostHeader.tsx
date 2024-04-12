import { FrontMatter } from 'lib/PostManager';

export default function PostHeader({ data }: { data: FrontMatter }) {
  return (
    <div className="post-header">
      <div className="post-title">{data.title}</div>
      <div className="post-info">
        <div className="post-tags">
          {data.tags
            ? data.tags.map((tag) => (
                <div className="post-tag" key={tag}>
                  {tag}
                </div>
              ))
            : null}
        </div>
        <div className="post-date">
          🗓️{' '}
          {new Date(data.date).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            weekday: 'short',
          })}
        </div>
      </div>
      <div className="post-author">
        ✍️ written by <strong>{data.author}</strong>
      </div>
    </div>
  );
}
