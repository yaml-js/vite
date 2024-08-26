import * as path from 'path';
import * as fs from 'fs/promises';
import { readAsync } from '@yaml-js/envyaml'

export class ConfigurationBuilder {
  public constructor(private root: string, private folder?: string, private fileName?: string) {}

  private async probeFiles(dir: string, name: string): Promise<Record<string, string[]>> {
    const subDirs = ['', 'app-config', 'config', 'configuration', 'settings'];
    const configFilesByFolder: Record<string, string[]> = {};
    const extensionPart = name.indexOf('.') === -1 ? "\\.ya?ml" : "";
    const regex = new RegExp(`^${name}(\\.\\w+)?${extensionPart}$`);

    for (const subDir of subDirs) {
      const searchDir = path.resolve(dir, subDir);
      try {
        const dirStats = await fs.stat(searchDir);
        if (dirStats.isDirectory()) {
          const files = await fs.readdir(searchDir);
          const matchedFiles: string[] = [];

          for (const file of files) {
            const fullPath = path.resolve(searchDir, file);
            const fileStats = await fs.stat(fullPath);
            if (fileStats.isFile() && regex.test(file)) {
              matchedFiles.push(fullPath);
            }
          }

          if (matchedFiles.length > 0) {
            configFilesByFolder[subDir] = matchedFiles;
          }
        }
      } catch {
        // skip the directory
      }
    }

    return configFilesByFolder;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async build(includeLocal: boolean = false): Promise<Record<string, any>> {

    let actualFolder = "";
    if (this.folder) {
      actualFolder = this.folder.startsWith('/') ? this.folder : path.resolve(this.root, this.folder);
    } else {
      const files = await this.probeFiles(this.root, this.fileName ?? 'application');
      if (Object.keys(files).length > 1) {
        throw new Error(`Multiple configuration files found, Matched folders: ${Object.keys(files).join(', ')}`);
      }

      if (Object.keys(files).length === 0) {
        return {};
      }
      actualFolder = path.resolve(this.root, Object.keys(files)[0]);
    }

    const file = path.resolve(actualFolder, this.fileName ?? 'application');
    return await readAsync({ includeLocal, filePath: file });
  }
}
