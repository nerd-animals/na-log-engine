import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_components/header';
import './globals.scss';

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
        <div className="page-wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}