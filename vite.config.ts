import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0
  },
  plugins: [
    react(),
    tsConfigPaths(),
    crx({ manifest }),
  ],
})
