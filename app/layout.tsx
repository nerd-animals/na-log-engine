import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_components/Header';
import Footer from './_components/Footer';
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
