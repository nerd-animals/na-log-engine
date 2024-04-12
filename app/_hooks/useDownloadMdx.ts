import { useContext } from 'react';
import { PostContext } from '@/_context/PostContext';

export default function useDownloadMdx() {
  const { post } = useContext(PostContext);

  const DownloadMdx = () => {
    const formattedTags: string = post.frontMatter.tags
      .map((tag) => `'${tag}'`)
      .join(', ');
    const formattedDate: string = post.frontMatter.date
      .toISOString()
      .substring(0, 10);

    const mdxContent = `---
title: '${post.frontMatter.title}'
tags:  [${formattedTags}]
author: '${post.frontMatter.author}'
date: ${formattedDate}
---
    
${post.content}`;

    const fileName = 'mdx.mdx';
    const element = document.createElement('a');
    const file = new Blob([mdxContent], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };
  return DownloadMdx;
}
