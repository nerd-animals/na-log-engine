import PostContent from './PostContent';

export interface Post {
  title: string;
  author: string;
  tags: string[];
  content: string;
}

export default function PostViewer({ post }: { post: Post }) {
  return (
    <div className="post-wrapper">
      <div className="post-title">{post.title}</div>
      <div className="post-info">
        <div className="post-tags">
          {post.tags
            ? post.tags.map((tag) => (
                <div className="post-tag" key={tag}>
                  {tag}
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="post-author">
        ✍️ written by <strong>{post.author}</strong>
      </div>
      <PostContent content={post.content} />
    </div>
  );
}
