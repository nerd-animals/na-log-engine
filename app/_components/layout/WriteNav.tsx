'use client';

import { useRouter } from 'next/navigation';

export default function WriteNav() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="navigation-wrapper">
      <button type="button" className="back" onClick={handleBack}>
        🤔 뒤로 가기
      </button>
      <button type="button" className="posting">
        🧑🏻‍💻 포스팅
      </button>
    </div>
  );
}
