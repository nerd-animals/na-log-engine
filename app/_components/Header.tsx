import config from 'public/config.json';
import Link from 'next/link';

export default async function Header() {
  return (
    <div className="page-header-wrapper">
      <header className="page-header">
        <div className="home-section">
          <Link className="link" href="/">
            {config.title}
          </Link>
        </div>
        <div className="category-section">
          <Link className="link" href="/about">
            about
          </Link>
        </div>
      </header>
    </div>
  );
}
