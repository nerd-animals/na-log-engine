import { Post } from 'lib/PostManager';
import PostHeader from './PostHeader';
import PostContent from './PostContent';

export default function PostViewer({ post }: { post: Post }) {
  return (
    <div className="post-wrapper">
      <PostHeader data={post.frontMatter} />
      <PostContent content={post.content} />
    </div>
  );
}
