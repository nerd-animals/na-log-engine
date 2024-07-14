import Link from 'next/link';

export default function PostSearchList({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  return (
    <div>
      <Link href={`/post/${slug}`}>
        <div>{title}</div>
      </Link>
    </div>
  );
}
