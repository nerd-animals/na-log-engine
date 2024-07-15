import config from 'public/config.json';
import Link from 'next/link';
import { Post } from 'lib/PostManager';
import PostSearch from '@/_components/post/PostSearch';

export default function Header({ initialPosts }: { initialPosts: Post[] }) {
  return (
    <div className="page-header-wrapper">
      <header className="page-header">
        <div className="home-section">
          <Link className="link" href="/">
            {config.title}
          </Link>
        </div>
        <div className="category-section">
          <Link className="link" href="/write">
            write
          </Link>
          <Link className="link" href="/about">
            about
          </Link>
          <PostSearch initialPosts={initialPosts} />
        </div>
      </header>
    </div>
  );
}
