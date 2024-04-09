'use client';

import { useState, useEffect } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypePrettycode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
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
        // 여기다가 remark plugin을 추가
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        // 여기다가 rehype plugin을 추가
        .use(rehypeStringify)
        .use(rehypePrettycode)
        .use(rehypeSlug)
        .process(content);

      setHtmlContent(html.toString());
    }
    processContent();
  }, [content]);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
