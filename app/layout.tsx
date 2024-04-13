import type { Metadata } from 'next';
import config from 'public/config.json';
import Footer from '@/_components/layout/Footer';
import '@/_styles/globals.scss';

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
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="page-wrapper">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
