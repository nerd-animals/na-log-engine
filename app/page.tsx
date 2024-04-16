import Bio from '@/_components/custom/Bio';
import PostCard from '@/_components/post/PostCard';
import Header from '@/_components/layout/Header';
import PostManager from 'lib/PostManager';

export default function Home() {
  const allPosts = PostManager.getInstance().getAllPost();
  return (
    <>
      <Header />
      <main className="home-wrapper">
        <Bio />
        <div className="post-card-container">
          {allPosts.map((post) => (
            <PostCard
              key={post.frontMatter.slug.join('/')}
              frontMatter={post.frontMatter}
            />
          ))}
        </div>
      </main>
    </>
  );
}
