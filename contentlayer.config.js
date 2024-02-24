import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeExternalLinks from 'rehype-external-links';

export const Post = defineDocumentType(() => ({
  name: 'Posts',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'string', required: true },
    tags: { type: 'list', required: false, of: { type: 'string' } },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
    categories: {
      type: 'list',
      resolve: (file) => {
        const categories = file._raw.flattenedPath.split('/').slice(0, -1);
        if (categories.length === 0) {
          throw new Error(
            'posts 안의 post에 최소 1개의 카테고리(상위 폴더)를 지정해주세요.'
          );
        }
        if (categories.length > 3) {
          throw new Error(
            'post는 최대 3개의 카테고리(상위 폴더)까지 설정할 수 있습니다.'
          );
        }
        return categories;
      },
    },
  },
}));

const rehypePrettyCodeOptions = {
  theme: 'github-dark',
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
      [
        rehypeExternalLinks,
        {
          properties: {
            class: 'external-link',
          },
          target: '_blank',
          rel: ['noopener noreferrer'],
        },
      ],
    ],
  },
});
