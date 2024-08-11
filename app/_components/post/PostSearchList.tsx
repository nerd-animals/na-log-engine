import Link from 'next/link';

export default function PostSearchList({
  slug,
  title,
}: {
  slug: string | null;
  title: string;
}) {
  const content = <div className="post-search-result-title">{title}</div>;

  return slug ? (
    <Link className="post-search-result" href={`/post/${slug}`}>
      {content}
    </Link>
  ) : (
    <div className="post-search-result">{content}</div>
  );
}
