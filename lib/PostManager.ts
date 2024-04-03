import { join, sep } from 'path';
import { MdxContent, getMdxContents, fileExtension } from './mdx';

export interface FrontMatter {
  title: string;
  summary: string;
  author: string;
  tags: string[];
  date: Date;
  slug: string[];
}

export interface Post {
  frontMatter: FrontMatter;
  content: string;
}

export default class PostManager {
  private static instance: PostManager;

  private readonly allPosts: Post[];

  private constructor() {
    const allMdxContents: MdxContent[] = getMdxContents(
      join(process.cwd(), 'post')
    );

    this.allPosts = allMdxContents.map((mdxContent) =>
      PostManager.makePost(mdxContent)
    );
  }

  static makePost(mdxContent: MdxContent): Post {
    const { path, data, content } = mdxContent;
    const slug: string[] = PostManager.getSlug(path);

    const frontMatter: FrontMatter = {
      title: data.title,
      summary: data.summary,
      author: data.author,
      tags: data.tags,
      date: data.date,
      slug,
    };

    return { frontMatter, content };
  }

  static getSlug(path: string): string[] {
    const slug: string[] = path
      .replace(process.cwd(), '')
      .replace(fileExtension, '')
      .split(sep)
      .filter((part) => part !== '');

    return slug;
  }

  public static getInstance() {
    if (!PostManager.instance) {
      PostManager.instance = new PostManager();
    }
    return PostManager.instance;
  }

  public getAllPost() {
    return this.allPosts;
  }

  public getPost(slug: string[]) {
    return this.allPosts.find(
      (post) => post.frontMatter.slug.join('/') === slug.join('/')
    );
  }
}
