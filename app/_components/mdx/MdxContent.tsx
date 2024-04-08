'use client';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export default function MdxContent({ content }: { content: string }) {
  const html = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkBreaks)
    // 여기다가 remark plugin을 추가
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    // 여기다가 rehype plugin을 추가
    .use(rehypeStringify)
    .processSync(content);

  return <div dangerouslySetInnerHTML={{ __html: html.toString() }} />;
}
