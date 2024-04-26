import { PostContext } from '@/_context/PostContext';
import { useContext } from 'react';
import useDownloadMdx from '@/_hooks/useDownloadMdx';

export default function PreviewModal() {
  const { post, isOpenModal, closeModal, updateSummary } =
    useContext(PostContext);
  const handleDownloadMdx = useDownloadMdx();

  return (
    isOpenModal && (
      <div className="preview-modal-wrapper">
        <div className="preview-modal">
          <div className="preview-modal-content">
            <h1>포스트 요약</h1>
            <div className="preview-modal-summary">
              <textarea
                className="summary"
                value={post.frontMatter.summary}
                placeholder="요약을 입력하세요"
                onChange={updateSummary}
              />
            </div>
          </div>
          <div className="preview-modal-nav">
            <button
              type="button"
              className="download"
              onClick={handleDownloadMdx}
            >
              🚀 다운로드
            </button>
            <button type="button" className="close" onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
      </div>
    )
  );
}
