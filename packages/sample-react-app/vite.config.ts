import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import yaml from '@viteyaml/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), yaml()],
})
