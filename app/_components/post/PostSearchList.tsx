import Link from 'next/link';

export default function PostSearchList({
  slug,
  title,
}: {
  slug: string | null;
  title: string;
}) {
  return slug ? (
    <Link className="post-search-result" href={`/post/${slug}`}>
      <div className="post-search-result-title">{title}</div>
    </Link>
  ) : (
    <div className="post-search-result">
      <div className="post-search-result-title">{title}</div>
    </div>
  );
}
