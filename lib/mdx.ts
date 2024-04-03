import { join } from 'path';
import { readFileSync, readdirSync, statSync } from 'fs';
import matter from 'gray-matter';

export interface MdxContent {
  path: string;
  data: any;
  content: string;
}

export const fileExtension = '.mdx';

export function getAllFiles(dirPath: string, filesList: string[] = []) {
  const files = readdirSync(dirPath);
  files.forEach((file) => {
    const filePath = join(dirPath, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, filesList);
    } else {
      filesList.push(filePath);
    }
  });
  return filesList;
}

export function getMdxContents(dirPath: string): MdxContent[] {
  const allPaths: string[] = getAllFiles(dirPath).filter((file) =>
    file.endsWith(fileExtension)
  );

  const mdxContents: MdxContent[] = allPaths.map((path) => {
    const fileContent = readFileSync(path);
    const { data, content } = matter(fileContent);
    return { path, data, content };
  });

  return mdxContents;
}
