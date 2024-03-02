import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_components/Header';
import Footer from './_components/Footer';
import './_styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

const githubRepository = process.env.GITHUB_REPOSITORY || '';
const githubOwner = githubRepository.split('/')[0];
const githubRepo = githubRepository.split('/')[1];
const basePath =
  githubRepo === `${githubOwner}.github.io` ? '/' : `/${githubRepo}`;

export async function generateMetadata(): Promise<Metadata> {
  const fetchPath =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:3000${basePath}`
      : `https://${githubOwner}.github.io${basePath}`;

  const res = await fetch(`${fetchPath}/config.json`);
  const config = await res.json();

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
