import Link from 'next/link';

export default function PostSearchList({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  return (
    <Link className="post-search-result" href={`/post/${slug}`}>
      <div className="post-search-result-title">{title}</div>
    </Link>
  );
}
