import Bio from '@/_components/custom/Bio';
import Header from '@/_components/layout/Header';
import PostTab from '@/_components/post/PostTab';
import PostSearch from '@/_components/post/PostSearch';
import PostManager from 'lib/PostManager';

export default function Home() {
  const allPosts = PostManager.getInstance().getAllPost();
  return (
    <>
      <Header />
      <main className="home-wrapper">
        <Bio />
        <div className="post-container">
          <PostSearch />
          <PostTab initialPosts={allPosts} />
        </div>
      </main>
    </>
  );
}
