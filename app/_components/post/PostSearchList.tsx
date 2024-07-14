import Link from 'next/link';

export default function PostSearchList({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  return (
    <Link className="search-result" href={`/post/${slug}`}>
      <div className="search-result-title">{title}</div>
    </Link>
  );
}
