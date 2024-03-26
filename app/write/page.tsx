'use client';

import { useState } from 'react';

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
      <div className="front-matter">
        <input className="title" type="text" onChange={onChangeInputPost} />
        <input className="author" type="text" onChange={onChangeInputPost} />
        <input className="tags" type="text" onChange={onChangeInputPost} />
        <input className="date" type="date" onChange={onChangeInputPost} />
      </div>
      <div className="input-wrapper">
        <textarea className="content" onChange={onChangeInputPost} />
        <div className="preview">{post.content}</div>
      </div>
    </div>
  );
}
