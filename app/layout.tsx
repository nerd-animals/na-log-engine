import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'na-log',
  description: '비전공자 개발자들의 no-answer를 yes-answer로 바꿔가는 기록',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        {children}
      </body>
    </html>
  );
}
