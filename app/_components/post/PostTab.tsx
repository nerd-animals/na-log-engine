'use client';

import { useState } from 'react';
import { Post } from 'lib/PostManager';
import PostCard from '@/_components/post/PostCard';
import PostMoreButton from '@/_components/post/PostMoreButton';

export default function PostTab({ initialPosts }: { initialPosts: Post[] }) {
  const posts = initialPosts;
  const initialPostCount = 4;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [postCount, setPostCount] = useState(initialPostCount);

  const categories = Array.from(
    new Set(posts.map((post) => post.frontMatter.slug.slice(0, -1).join('/')))
  );

  const filteredPosts = selectedCategory
    ? posts.filter(
        (post) =>
          post.frontMatter.slug.slice(0, -1).join('/') === selectedCategory
      )
    : posts;

  const hasMorePosts = filteredPosts.length > postCount;

  const morePost = () => {
    const remainedPosts = filteredPosts.length - postCount;
    const countIncrement = Math.min(remainedPosts, initialPostCount);
    setPostCount(postCount + countIncrement);
  };

  return (
    <>
      <div className="post-tab-container" role="tablist">
        <button
          type="button"
          className="post-tab-button"
          role="tab"
          aria-selected={selectedCategory === null}
          onClick={() => {
            setSelectedCategory(null);
            setPostCount(initialPostCount);
          }}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className="post-tab-button"
            role="tab"
            aria-selected={selectedCategory === category}
            onClick={() => {
              setSelectedCategory(category);
              setPostCount(initialPostCount);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="post-card-container">
        {filteredPosts.slice(0, postCount).map((post) => (
          <PostCard
            key={post.frontMatter.slug.join('/')}
            frontMatter={post.frontMatter}
          />
        ))}
      </div>
      {hasMorePosts && <PostMoreButton morePost={morePost} />}
    </>
  );
}
