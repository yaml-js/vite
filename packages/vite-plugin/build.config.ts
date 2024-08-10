import { defineConfig } from 'tsup'

export default defineConfig({
  name: "@viteyaml/plugin",
  entry: ['src/viteyaml.plugin.ts'],
  format: ['esm', 'cjs'],
  target: 'node22',
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  skipNodeModulesBundle: true,
  platform: 'node'
});
