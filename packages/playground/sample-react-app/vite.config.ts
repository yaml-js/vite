import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import yaml from '@yaml-js/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), yaml()],
  base: './',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  }
})
