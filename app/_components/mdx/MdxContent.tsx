'use client';

import '@/_styles/mdx.scss';
import { useState, useEffect } from 'react';
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

export default function MdxContent({ content }: { content: string }) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    async function processContent() {
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
        .process(content);

      setHtmlContent(html.toString());
    }
    processContent();
  }, [content]);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
