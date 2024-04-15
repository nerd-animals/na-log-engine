'use client';

import PostViewer from '@/_components/post/PostViewer';
import PostEditor from '@/_components/post/PostEditor';
import { PostContext, PostProvider } from '@/_context/PostContext';
import { useContext } from 'react';

function WriteContent() {
  const { post } = useContext(PostContext);

  return (
    <>
      <PostEditor />
      <div className="write-preview-wrapper">
        <div className="write-preview">
          <PostViewer post={post} />
        </div>
      </div>
    </>
  );
}

export default function Write() {
  return (
    <PostProvider>
      <WriteContent />
    </PostProvider>
  );
}
