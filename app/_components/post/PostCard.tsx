import Link from 'next/link';
import { FrontMatter } from 'lib/PostManager';

export default function PostCard({
  frontMatter,
}: {
  frontMatter: FrontMatter;
}) {
  const { title, summary, tags, date, slug } = frontMatter;
  const categories = slug.slice(0, -1);
  return (
    <div className="post-card-wrapper">
      <Link className="post-card" href={`/post/${slug.join('/')}`}>
        <div className="post-card-category">
          {categories[categories.length - 1]}
        </div>
        <div className="post-card-title">{title}</div>
        <div className="post-card-summary">{summary}</div>
        <div className="post-card-info">
          <div className="post-card-tags">
            {tags
              ? tags.slice(0, 3).map((tag) => (
                  <div className="post-card-tag" key={tag}>
                    {tag}
                  </div>
                ))
              : null}
          </div>
          <div className="post-card-date">
            {new Date(date).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
              weekday: 'short',
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
