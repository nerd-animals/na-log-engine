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
      setSearchedPostTitle('');
    }, 200);
  };

  const searchedPosts = searchedPostTitle
    ? posts.filter((post) => post.frontMatter.title.includes(searchedPostTitle))
    : posts;

  return (
    <div
      className={`post-search-container ${isInputVisible ? 'expanded' : ''}`}
    >
      <div
        className={`post-search-input-wrapper ${isInputVisible ? 'visible' : ''}`}
      >
        <input
          ref={inputRef}
          className="post-search-input"
          type="text"
          value={searchedPostTitle}
          onChange={handleChangeSearchInput}
          onFocus={handleFocusSearchInput}
          onBlur={handleBlurSearchInput}
        />
      </div>
      <button
        type="button"
        aria-label="Save"
        className="post-search-button"
        onClick={handleSearchClick}
      />
      {isFocusedSearchInput && isInputVisible && (
        <div className="post-search-results">
          {searchedPosts.length > 0 ? (
            searchedPosts.map((post) => (
              <PostSearchList
                key={post.frontMatter.slug.join('/')}
                slug={post.frontMatter.slug.join('/')}
                title={post.frontMatter.title}
              />
            ))
          ) : (
            <div className="post-search-result-title">
              해당하는 글이 없습니다.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
