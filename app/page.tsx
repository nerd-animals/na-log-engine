import Bio from '@/_components/custom/Bio';
import PostCard from '@/_components/post/PostCard';
import PostManager from 'lib/PostManager';

export default function Home() {
  const allPosts = PostManager.getInstance().getAllPost();
  return (
    <>
      <Bio />
      <main className="post-card-wrapper">
        {allPosts.map((post) => (
          <PostCard
            key={post.frontMatter.slug.join('/')}
            frontMatter={post.frontMatter}
          />
        ))}
      </main>
    </>
  );
}
