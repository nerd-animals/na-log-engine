import { join } from 'path';
import { MdxContent, getMdxContents } from './mdx';

export interface About {
  fileName: string;
  title: string;
  content: string;
}

export default class AboutManager {
  private static instance: AboutManager;

  private readonly allAbouts: About[];

  private constructor() {
    const allMdxContents: MdxContent[] = getMdxContents(
      join(process.cwd(), 'page-item')
    );

    this.allAbouts = allMdxContents
      .filter((mdxContent) => mdxContent.path.includes('about-'))
      .map((mdxContent) => AboutManager.makeAbout(mdxContent));
  }

  private static makeAbout(mdxContent: MdxContent): About {
    const { path, data, content } = mdxContent;
    const dirPath: string = join(process.cwd(), '');

    const about: About = {
      fileName: path.replace(dirPath, ''),
      title: data.title || '',
      content: content || '',
    };

    return about;
  }

  public static getInstance() {
    if (!AboutManager.instance) {
      AboutManager.instance = new AboutManager();
    }
    return AboutManager.instance;
  }

  public getAllAbout() {
    return this.allAbouts;
  }
}
