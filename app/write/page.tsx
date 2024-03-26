'use client';

import { useState } from 'react';
import PostDisplay from 'app/_components/PostDisplay';

export default function Write() {
  const [post, setPost] = useState({
    title: '',
    author: '',
    tags: '',
    date: '',
    content: '',
  });

  const onChangeInputPost = (e: any) => {
    setPost((prevState) => ({
      ...prevState,
      [e.target.className]: e.target.value,
    }));
  };

  return (
    <div className="write-wrapper">
      <div className="write-editor">
        <div className="front-matter">
          <input
            className="title"
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={onChangeInputPost}
          />
          <input
            className="tags"
            type="text"
            placeholder="태그를 입력해주세요"
            onChange={onChangeInputPost}
          />
          <input
            className="date"
            type="date"
            required
            onChange={onChangeInputPost}
          />
          <input
            className="author"
            type="text"
            placeholder="글쓴이를 입력해주세요"
            onChange={onChangeInputPost}
          />
        </div>
        <textarea className="content" onChange={onChangeInputPost} />
      </div>
      <div className="write-preview">
        <PostDisplay post={post} />
      </div>
    </div>
  );
}
