'use client';

import React, { useState, useEffect, useMemo } from 'react';
import '@/_styles/mdx.scss';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypePrettycode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const contentThreshold = 10000; // 문자 수 기준점
const delay = 100; // ms 단위의 지연 시간

export default function MdxContent({ content }: { content: string }) {
  const [htmlContent, setHtmlContent] = useState('');

  const processContent = useMemo(
    () => async (markdown: string) => {
      const html = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkBreaks)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .use(rehypePrettycode)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, {
          properties: {
            className: ['anchor'],
          },
          behavior: 'wrap',
        })
        .use(rehypeExternalLinks, {
          properties: {
            class: 'external-link',
          },
          target: '_blank',
          rel: ['noopener noreferrer'],
        })
        .process(markdown);

      setHtmlContent(String(html));
    },
    []
  );

  useEffect(() => {
    const contentLength = content.length;
    const dynamicDelay =
      contentLength > contentThreshold
        ? delay * (contentLength / contentThreshold)
        : delay;

    if (contentLength <= contentThreshold) {
      processContent(content);
      return () => {};
    }
    const timer = setTimeout(() => {
      processContent(content);
    }, dynamicDelay);

    return () => clearTimeout(timer);
  }, [content, processContent]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
