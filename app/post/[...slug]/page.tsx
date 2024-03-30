import { notFound } from 'next/navigation';
import PostManager from 'lib/PostManager';
import PostViewer from '../../_components/PostViewer';
import Giscus from '../../_components/Giscus';
import '../../_styles/mdx.scss';

export function generateStaticParams() {
  const allPosts = PostManager.getInstance().getAllPost();

  const paths = allPosts.map((post) => ({ slug: post.slug }));
  paths.push({ slug: ['not-found'] });
  return paths;
}

export default function Post({ params }: { params: { slug: string[] } }) {
  const post = PostManager.getInstance().getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="post-wrapper">
      <PostViewer post={post} />
      <Giscus />
    </div>
  );
}
