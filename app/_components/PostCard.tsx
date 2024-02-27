import Link from 'next/link';

interface PostCardProps {
  key: string;
  slug: string;
  categories: string[];
  title: string;
  summary: string;
  tags: string[] | undefined;
  date: string;
}

export default function PostCard({
  key,
  slug,
  categories,
  title,
  summary,
  tags,
  date,
}: PostCardProps) {
  return (
    <Link className="post-card" href={`/post/${slug}`} key={key}>
      <div className="post-card-category">
        {categories[categories.length - 1]}
      </div>
      <div className="post-card-title">{title}</div>
      <div className="post-card-summary">{summary}</div>
      <div className="post-card-info">
        <div className="post-card-tags">
          {tags
            ? tags.map((tag) => (
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
  );
}
