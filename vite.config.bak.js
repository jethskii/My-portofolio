// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // If your GitHub repo will be My-Portofolio, keep this:
  base: '/My-Portofolio/',

  server: {
    open: '/about.html',
    host: true,
    port: 5173
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild'
  }
})
