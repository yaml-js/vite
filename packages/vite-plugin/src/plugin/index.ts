import { createFilter, type FilterPattern } from '@rollup/pluginutils'
import type { Plugin } from 'vite'
import transformation from './transformation'

export type PluginOptions = {
  include?: FilterPattern
  exclude?: FilterPattern
}

const FILE_EXTENSION_PATTERN = /\.ya?ml$/

export type PluginFactory = (options?: PluginOptions) => Plugin

const factory: PluginFactory = (options?: PluginOptions): Plugin => {
  let filesFilter: ((id: string | unknown) => boolean) | null = null
  if (options) {
    filesFilter = createFilter(options.include, options.exclude)
  }

  return {
    name: 'yam-js:vite-transformer',
    async transform(code: string, id: string) {
      if (!FILE_EXTENSION_PATTERN.test(id) || (filesFilter && !filesFilter(id))) {
        return null
      }

      return {
        code: transformation(code),
        map: { mappings: '' }
      }
    }
  }
}

export default factory
