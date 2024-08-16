import { defineConfig } from 'tsup'

export default defineConfig({
  name: "@viteyaml/plugin",
  entry: ['src/yaml-js.vite.ts'],
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
