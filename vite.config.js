import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from 'vite-plugin-prerender'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
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
