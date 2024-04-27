'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { PostContext } from '@/_context/PostContext';

export default function WriteNav() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const { openModal } = useContext(PostContext);

  return (
    <div className="navigation-wrapper">
      <button type="button" className="back" onClick={handleBack}>
        🤔 뒤로 가기
      </button>
      <button type="button" className="posting" onClick={openModal}>
        🧑🏻‍💻 포스팅
      </button>
    </div>
  );
}
