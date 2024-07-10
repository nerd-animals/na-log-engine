import Bio from '@/_components/custom/Bio';
import Header from '@/_components/layout/Header';
import PostManager from 'lib/PostManager';

export default function Home() {
  const allPosts = PostManager.getInstance().getAllPost();
  return (
    <>
      <Header />
      <main className="home-wrapper">
        <Bio />
      </main>
    </>
  );
}
