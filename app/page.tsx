import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import Bio from './_components/Bio';
import PostCard from './_components/PostCard';

export default function Home() {
  return (
    <div>
      <Bio />
      <main>
        <PostCard />
      </main>
      {
        allPosts.map((post) => (
          <div>
            <Link href={`/post/${post.slug}`} key={post._id}>
              {post.title}
            </Link>
          </div>
        )) /* this is test code */
      }
    </div>
  );
}
