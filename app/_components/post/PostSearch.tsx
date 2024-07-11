'use client';

import { useState } from 'react';
import PostSearchList from '@/_components/post/PostSearchList';

export default function PostSearch() {
  const [searchedPostTitle, setSearchedPostTitle] = useState('');
  const handleChangeInputSearchedPostTitle = (e) => {
    setSearchedPostTitle(e.target.value);
  };

  return (
    <>
      <input
        className="search"
        type="text"
        onChange={handleChangeInputSearchedPostTitle}
      />
      <PostSearchList />
    </>
  );
}
