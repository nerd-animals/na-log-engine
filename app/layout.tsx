import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import config from 'public/config.json';
import Header from './_components/Header';
import Footer from './_components/Footer';
import './_styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: config.title,
    description: config.description,
  };
}

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
