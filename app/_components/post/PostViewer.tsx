import { Post } from 'lib/PostManager';
import MdxContent from '@/_components/mdx/MdxContent';
import PostHeader from './PostHeader';

export default function PostViewer({ post }: { post: Post }) {
  return (
    <div className="post-wrapper">
      <PostHeader data={post.frontMatter} />
      <MdxContent content={post.content} />
    </div>
  );
}
