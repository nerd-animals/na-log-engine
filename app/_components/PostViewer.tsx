import { PostWithoutSlug } from 'lib/PostManager';
import PostContent from './PostContent';
import PostHeader from './PostHeader';

export default function PostViewer({ post }: { post: PostWithoutSlug }) {
  return (
    <div className="post-wrapper">
      <PostHeader data={post.frontMatter} />
      <PostContent content={post.content} />
    </div>
  );
}
