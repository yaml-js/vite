import { buildConfigForLib } from '../../shared/vite.config.lib';
import { resolve } from 'path';

const entryPath = resolve(__dirname, './src');
const aliasOptions = {
  '@': entryPath,
};

export default buildConfigForLib('viteyaml.plugin', entryPath, aliasOptions, undefined);
