'use client';

import { useState } from 'react';
import { Post } from 'lib/PostManager';
import PostCard from '@/_components/post/PostCard';

export default function PostTab({ initialPosts }: { initialPosts: Post[] }) {
  const posts = initialPosts;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(posts.map((post) => post.frontMatter.slug.slice(0, -1).join('/')))
  );

  const filteredPosts = selectedCategory
    ? posts.filter(
        (post) =>
          post.frontMatter.slug.slice(0, -1).join('/') === selectedCategory
      )
    : posts;

  return (
    <>
      <div className="post-tab-wrapper">
        <button
          type="button"
          className="post-tab-button-all"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`post-tab-button-${category}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="post-card-container">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.frontMatter.slug}
            frontMatter={post.frontMatter}
          />
        ))}
      </div>
    </>
  );
}
