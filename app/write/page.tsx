'use client';

import { useState } from 'react';
import PostViewer, { Post } from 'app/_components/PostViewer';

export default function Write() {
  const [post, setPost] = useState<Post>({
    title: '',
    author: '',
    tags: [],
    content: '',
  });

  const [inputTag, setInputTag] = useState('');

  const addTag = () => {
    if (inputTag !== '') {
      setPost((prevPost) => ({
        ...prevPost,
        tags: [...prevPost.tags, inputTag.trim()],
      }));
      setInputTag('');
    }
  };

  const deleteTag = () => {
    if (inputTag === '') {
      setPost((prevPost) => ({
        ...prevPost,
        tags: prevPost.tags.slice(0, -1),
      }));
    }
  };

  const handleChangeInputTag = (e: any) => {
    setInputTag(e.target.value);
  };

  const handleChangeInputPost = (e: any) => {
    setPost((prevState) => ({
      ...prevState,
      [e.target.className]: e.target.value,
    }));
  };

  const handleKeyDownValue = (e: any) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) addTag();
    else if (e.key === 'Backspace') {
      deleteTag();
    }
  };

  return (
    <div className="write-wrapper">
      <div className="write-editor">
        <div className="front-matter">
          <input
            className="title"
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={handleChangeInputPost}
          />
          <input
            className="tags"
            type="text"
            placeholder="태그를 입력해주세요"
            value={inputTag}
            onChange={handleChangeInputTag}
            onKeyDown={handleKeyDownValue}
          />
          <input
            className="author"
            type="text"
            placeholder="글쓴이를 입력해주세요"
            onChange={handleChangeInputPost}
          />
        </div>
        <textarea className="content" onChange={handleChangeInputPost} />
      </div>
      <div className="write-preview">
        <PostViewer post={post} />
      </div>
    </div>
  );
}
