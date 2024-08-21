import { Post } from 'lib/PostManager';
import { memo } from 'react';
import MdxContent from '@/_components/mdx/MdxContent';
import PostHeader from './PostHeader';

const MemoizedPostHeader = memo(PostHeader);
const MemoizedMdxContent = memo(MdxContent);

export default function PostViewer({ post }: { post: Post }) {
  return (
    <div className="post-wrapper">
      <MemoizedPostHeader data={post.frontMatter} />
      <div className="post-content">
        <MemoizedMdxContent content={post.content} />
      </div>
    </div>
  );
}
