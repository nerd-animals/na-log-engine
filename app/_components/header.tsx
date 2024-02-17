import Link from 'next/link';

export default function Header() {
  return (
    <div className="page-header-wrapper">
      <header className="page-header">
        <div className="home-section">
          <Link className="link" href="/">
            na-log
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
