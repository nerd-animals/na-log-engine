import { PostContext } from '@/_context/PostContext';
import { useContext } from 'react';

export default function PreviewModal() {
  const { post, updateSummary } = useContext(PostContext);

  return (
    <div className="preview-modal-wrapper">
      <div className="preview-modal">
        <input
          className="summary"
          type="text"
          value={post.frontMatter.summary}
          onChange={updateSummary}
        />
      </div>
    </div>
  );
}
