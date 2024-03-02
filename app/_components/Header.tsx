import Link from 'next/link';

const githubRepository = process.env.GITHUB_REPOSITORY || '';
const githubOwner = githubRepository.split('/')[0];
const githubRepo = githubRepository.split('/')[1];
const basePath =
  githubRepo === `${githubOwner}.github.io` ? '/' : `/${githubRepo}`;

async function getHome(): Promise<string> {
  const fetchPath =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:3000${basePath}`
      : `https://${githubOwner}.github.io${basePath}`;

  const res = await fetch(`${fetchPath}/config.json`);
  const config = await res.json();

  return config.title;
}

export default async function Header() {
  return (
    <div className="page-header-wrapper">
      <header className="page-header">
        <div className="home-section">
          <Link className="link" href="/">
            {await getHome()}
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
