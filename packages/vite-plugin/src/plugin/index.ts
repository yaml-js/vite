import { createFilter, type FilterPattern } from '@rollup/pluginutils'
import type { Plugin } from 'vite'
import { resolve } from 'path'

import transformation from './transformation'
import { ConfigurationBuilder } from './configurationBuidler'

export type PluginOptions = {
  trasnform?: {
    include?: FilterPattern
    exclude?: FilterPattern
  }
  config?: {
    folder?: string
    file?: string
  }
}

const FILE_EXTENSION_PATTERN = /\.ya?ml$/

export type PluginFactory = (options?: PluginOptions) => Plugin<any>

const factory: PluginFactory = (options?: PluginOptions): Plugin<any> => {
  let filesFilter: ((id: string | undefined) => boolean) | null = null
  if (options) {
    filesFilter = createFilter(options?.trasnform?.include, options?.trasnform?.exclude)
  }

  let appConfig = {}
  return {
    name: 'yam-js:vite-plugin',

    async configResolved({ root = process.cwd(), command }): Promise<void> {
      const resolvedRoot = resolve(root)
      const includeLocal = command === 'serve'
      const builder = new ConfigurationBuilder(resolvedRoot, options?.config?.folder, options?.config?.file)
      appConfig = await builder.build(includeLocal)
    },

    async transform(code: string, id: string) {
      if (code.includes('$application.config')) {
        const transformedCode = code.replaceAll('$application.config', JSON.stringify(appConfig))
        return {
          code: transformedCode,
          map: { mappings: '' }
        }
      }

      if (!FILE_EXTENSION_PATTERN.test(id) || (filesFilter && !filesFilter(id))) {
        return null
      }

      return {
        code: transformation(code),
        map: { mappings: '' }
      }
    }
  } as Plugin
}

export default factory
