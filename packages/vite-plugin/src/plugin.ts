import { createFilter, type FilterPattern } from '@rollup/pluginutils';
import type { Plugin } from 'vite';
import { Transformation } from './transformations/transformation';
import { ExpandVarsTransformation, type VarValueResolver } from './transformations/expandVarsTransformation';
import { YamlToJsTransformation } from './transformations/yamlToJsTransformation';

export type PluginOptions = {
  include?: FilterPattern;
  exclude?: FilterPattern;
};

class EnvVarsExpansionProvider implements VarValueResolver {
  private env = process.env;
  get = (key: string): string | undefined => this.env[key];
}

const transformations: Transformation[] = [
  new ExpandVarsTransformation(new EnvVarsExpansionProvider()),
  new YamlToJsTransformation(),
];

const FILE_EXTENSION_PATTERN = /\.ya?ml$/;

export type PluginFactory = (options?: PluginOptions) => Plugin;

const factory: PluginFactory = (options?: PluginOptions): Plugin => {

  let filesFilter: ((id: string | unknown) => boolean) | null = null;
  if (options) {
    filesFilter = createFilter(options.include, options.exclude);
  }

  return {
      name: 'viteyaml:plugin',
      transform(code: string, id: string) {
        if (!FILE_EXTENSION_PATTERN.test(id) || (filesFilter && !filesFilter(id))) {
          return null;
        }

        let result = code
        transformations.forEach(async transformation => {
          result = transformation.execute(result);
        });

        return {
          code: result,
          map: { mappings: "" },
        };
      }
    }
};

export default factory;
