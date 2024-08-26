import { defineConfig } from 'tsup'


const debug_build = process.env.YAML_JS_MODE === "DEBUG"
if (debug_build) {
  console.log("Building in DEBUG mode")
}

export default defineConfig({
  name: "@viteyaml/plugin",
  entry: ['src/yaml-js.vite.ts'],
  format: ['esm', 'cjs'],
  target: 'node22',
  dts: true,
  minify: !debug_build,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  skipNodeModulesBundle: true,
  platform: 'node'
});
