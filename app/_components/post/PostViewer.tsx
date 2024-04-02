import { PostWithoutSlug } from 'lib/PostManager';
import PostHeader from './PostHeader';
import PostContent from './PostContent';

export default function PostViewer({ post }: { post: PostWithoutSlug }) {
  return (
    <div className="write-preview">
      <div className="post-wrapper">
        <PostHeader data={post.frontMatter} />
        <PostContent content={post.content} />
      </div>
    </div>
  );
}
