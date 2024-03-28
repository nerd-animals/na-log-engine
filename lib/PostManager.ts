import { join, sep } from 'path';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import getAllFiles from './file';

interface MdxContent {
  data: any;
  content: string;
}

export interface FrontMatter {
  title: string;
  summary: string;
  author: string;
  tags: string[];
  date: Date;
}

export interface Post {
  slug: string[];
  frontMatter: FrontMatter;
  content: string;
}

export default class PostManager {
  private static instance: PostManager;

  private readonly postPath = join(process.cwd(), 'post');

  private readonly postExtension = '.mdx';

  private readonly allPosts: Post[];

  private constructor() {
    const allPaths: string[] = getAllFiles(this.postPath)
      .map((file) => file.replace(this.postPath, ''))
      .filter((file) => file.endsWith(this.postExtension));

    this.allPosts = this.getAllPosts(allPaths);
  }

  private getAllPosts(paths: string[]): Post[] {
    const mdxContents: Post[] = paths.map((path) => {
      const fileContent = readFileSync(join(process.cwd(), 'post', path));
      const { data, content } = matter(fileContent);
      return this.validate(path, { data, content });
    });

    return mdxContents;
  }

  private validate(path: string, mdxContent: MdxContent): Post {
    const { data, content } = mdxContent;
    const slug: string[] = this.getSlug(path);

    const frontMatter: FrontMatter = {
      title: data.title,
      summary: data.summary,
      author: data.author,
      tags: data.tags,
      date: data.date,
    };

    return { slug, frontMatter, content };
  }

  private getSlug(path: string): string[] {
    return path
      .replace(this.postExtension, '')
      .split(sep)
      .filter((part) => part !== '');
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
    return this.allPosts.find((post) => post.slug.join('/') === slug.join('/'));
  }
}
