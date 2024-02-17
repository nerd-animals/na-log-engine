import Link from 'next/link';

export default function Header() {
  return (
    <div className="page-header-wrapper">
      <header className="page-header">
        <div className="home-section">
          <Link href="/">na-log</Link>
        </div>
        <div className="category-section">
          <Link href="/about">about</Link>
        </div>
      </header>
    </div>
  );
}
