import Bio from '@/_components/custom/Bio';
import Header from '@/_components/layout/Header';
import PostTab from '@/_components/post/PostTab';
import PostManager from 'lib/PostManager';

export default function Home() {
  const allPosts = PostManager.getInstance().getAllPost();
  return (
    <>
      <Header initialPosts={allPosts} />
      <main className="home-wrapper">
        <Bio />
        <div className="post-container">
          <PostTab initialPosts={allPosts} />
        </div>
      </main>
    </>
  );
}
