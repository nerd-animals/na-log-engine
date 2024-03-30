import { join } from 'path';
import { readdirSync, statSync } from 'fs';

export default function getAllFiles(dirPath: string, filesList: string[] = []) {
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
