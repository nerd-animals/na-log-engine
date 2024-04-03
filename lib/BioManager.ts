import { join } from 'path';
import { MdxContent, getMdxContents } from './mdx';

export interface Bio {
  imagePath: string;
  content: string;
}

export default class BioManager {
  private static instance: BioManager;

  private readonly bio: Bio | undefined;

  private constructor() {
    const allMdxContents: MdxContent[] = getMdxContents(
      join(process.cwd(), 'page-item')
    );

    const bioContent = allMdxContents.find(
      (mdxContent) =>
        mdxContent.path === join(process.cwd(), 'page-item', 'bio.mdx')
    );

    if (bioContent) {
      this.bio = BioManager.makeBio(bioContent);
    }
  }

  static makeBio(mdxContent: MdxContent): Bio {
    const { data, content } = mdxContent;

    const bio: Bio = {
      imagePath: data.imagePath || '',
      content: content || '',
    };

    return bio;
  }

  public static getInstance() {
    if (!BioManager.instance) {
      BioManager.instance = new BioManager();
    }
    return BioManager.instance;
  }

  public getBio() {
    return this.bio;
  }
}
