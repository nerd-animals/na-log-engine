import { allPosts } from 'contentlayer/generated';
import Bio from './_components/Bio';
import PostCard from './_components/PostCard';

export default function Home() {
  return (
    <>
      <Bio />
      <main className="post-card-wrapper">
        {allPosts.map((post) => (
          <PostCard
            key={post._id}
            slug={post.slug}
            categories={post.categories}
            title={post.title}
            summary={post.summary}
            tags={post.tags}
            date={post.date}
          />
        ))}
      </main>
    </>
  );
}
