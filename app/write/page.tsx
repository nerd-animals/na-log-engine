'use client';

import { useState } from 'react';

export default function Write() {
  const [content, setContent] = useState('');

  const onChangeInputContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <textarea value={content} onChange={onChangeInputContent} />
    </div>
  );
}
