import { defineConfig, AliasOptions } from 'vite';
import { RollupOptions } from 'rollup';
import dts from 'vite-plugin-dts';

export type FileCopyOptions = {
  from: string;
  output: (file: string) => string;
}

export const buildConfigForLib = (moduleName: string, srcPath: string, aliasOptions: AliasOptions | undefined, rollupOptions: RollupOptions | undefined) =>
  defineConfig({
    plugins: [dts({ rollupTypes: true })],
    build: {
      lib: {
        entry: `${srcPath}/${moduleName}.ts`,
        name: `${moduleName}`,
        fileName: (format) => `${moduleName}.${format}.js`,
      },
      sourcemap: true,
      emptyOutDir: true,
      rollupOptions: rollupOptions
    },
    resolve: {
      alias: aliasOptions,
    },
  });
