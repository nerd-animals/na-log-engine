import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Posts',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'date', required: true },
    categories: { type: 'list', required: true, of: { type: 'string' } },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
  },
}));

const rehypePrettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
