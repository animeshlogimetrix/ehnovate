import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const _require = createRequire(import.meta.url)
globalThis.require = _require

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prerender = _require('vite-plugin-prerender')
const JSDOMRenderer = _require('@prerenderer/renderer-jsdom')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      renderer: new JSDOMRenderer(),
      routes: [
        '/',
        '/about',
        '/products',
        '/industries',
        '/technology',
        '/achievements',
        '/roadmap',
        '/contact'
      ],
      postProcess(renderedRoute) {
        // Update the route html to remove any React hydration mismatches if necessary
        return renderedRoute;
      }
    })
  ],
})
