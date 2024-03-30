'use client';

import PostViewer from 'app/_components/PostViewer';
import PostEditor from 'app/_components/PostEditor';
import { PostContext, PostProvider } from 'app/_components/PostContext';
import { useContext } from 'react';

function WriteContent() {
  const { post } = useContext(PostContext);

  return (
    <div className="write-wrapper">
      <PostEditor />
      <PostViewer post={post} />
    </div>
  );
}

export default function Write() {
  return (
    <PostProvider>
      <WriteContent />
    </PostProvider>
  );
}
