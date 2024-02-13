import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
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
      <div className={styles.description}>
        <p>hello, na-log!</p>
      </div>
    </main>
  );
}
