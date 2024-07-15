import PostManager from 'lib/PostManager';
import Header from '@/_components/layout/Header';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allPosts = PostManager.getInstance().getAllPost();
  return (
    <>
      <Header initialPosts={allPosts} />
      <main className="contents-wrapper">{children}</main>
    </>
  );
}
