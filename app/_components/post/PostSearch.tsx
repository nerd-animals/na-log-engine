'use client';

import { useState, useRef, useEffect } from 'react';
import { Post } from 'lib/PostManager';
import PostSearchList from '@/_components/post/PostSearchList';

export default function PostSearch({ initialPosts }: { initialPosts: Post[] }) {
  const posts = initialPosts;
  const [isFocusedSearchInput, setIsFocusedSearchInput] = useState(false);
  const [searchedPostTitle, setSearchedPostTitle] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isInputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPostTitle(e.target.value);
  };

  const handleFocusSearchInput = () => {
    setIsFocusedSearchInput(true);
  };

  const handleSearchClick = () => {
    setIsInputVisible(true);
  };

  const handleBlurSearchInput = () => {
    setTimeout(() => {
      setIsFocusedSearchInput(false);
      setIsInputVisible(false);
    }, 200);
  };

  const searchedPosts = searchedPostTitle
    ? posts.filter((post) => post.frontMatter.title.includes(searchedPostTitle))
    : posts;

  return (
    <div className="search-wrapper">
      <input
        className="search"
        type="text"
        value={searchedPostTitle}
        onChange={handleChangeSearchInput}
        onFocus={handleFocusSearchInput}
        onBlur={handleBlurSearchInput}
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
          <div className="post-search-result">해당하는 글이 없습니다.</div>
        ))}
    </div>
  );
}
