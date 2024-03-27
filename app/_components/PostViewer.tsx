import PostContent from './PostContent';
import PostHeader from './PostHeader';

import { Post } from '../../lib/PostManager';

export default function PostViewer({ post }: { post: Post }) {
  return (
    <div className="post-wrapper">
      <PostHeader data={post.frontMatter} />
      <PostContent content={post.content} />
    </div>
  );
}
