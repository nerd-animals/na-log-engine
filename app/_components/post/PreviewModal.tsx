import { PostContext } from '@/_context/PostContext';
import { useContext } from 'react';
import useDownloadMdx from '@/_hooks/useDownloadMdx';

export default function PreviewModal() {
  const { post, updateSummary } = useContext(PostContext);
  const handleDownloadMdx = useDownloadMdx();

  return (
    <div className="preview-modal-wrapper">
      <div className="preview-modal">
        <input
          className="summary"
          type="text"
          value={post.frontMatter.summary}
          onChange={updateSummary}
        />
        <button type="button" className="download" onClick={handleDownloadMdx}>
          🧑🏻‍💻 포스팅 다운로드
        </button>
      </div>
    </div>
  );
}
