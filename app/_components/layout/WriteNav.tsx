'use client';

import useDownloadMdx from '@/_hooks/useDownloadMdx';
import { useRouter } from 'next/navigation';

export default function WriteNav() {
  const handleDownloadMdx = useDownloadMdx();
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="navigation-wrapper">
      <button type="button" className="back" onClick={handleBack}>
        🤔 뒤로 가기
      </button>
      <button type="button" className="download" onClick={handleDownloadMdx}>
        🧑🏻‍💻 포스팅 다운로드
      </button>
    </div>
  );
}
