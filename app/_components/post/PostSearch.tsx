'use client';

import { useState } from 'react';
import { Post } from 'lib/PostManager';
import PostSearchList from '@/_components/post/PostSearchList';

export default function PostSearch({ initialPosts }: { initialPosts: Post[] }) {
  const posts = initialPosts;
  const [isFocusedSearchInput, setIsFocusedSearchInput] = useState(false);
  const [searchedPostTitle, setSearchedPostTitle] = useState('');

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPostTitle(e.target.value);
  };

  const handleFocusSearchInput = () => {
    setIsFocusedSearchInput(true);
  };
  const handleBlurSearchInput = () => {
    setIsFocusedSearchInput(false);
  };

  const searchedPosts = searchedPostTitle
    ? posts.filter((post) => post.frontMatter.title.includes(searchedPostTitle))
    : posts;

  return (
    <>
      <input
        className="search"
        type="text"
        value={searchedPostTitle}
        onChange={handleChangeInputSearchedPostTitle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocusedSearchInput &&
        (searchedPosts.length > 0 ? (
          searchedPosts.map((post) => (
            <PostSearchList
              key={post.frontMatter.slug.join('/')}
              slug={post.frontMatter.slug.join('/')}
              title={post.frontMatter.title}
            />
          ))
        ) : (
          <div>해당하는 글이 없습니다.</div>
        ))}
    </>
  );
}
