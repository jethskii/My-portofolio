// vite.config.js
import { defineConfig } from 'vite'

// Detect environment: Vercel sets VERCEL=true on builds
const isVercel = !!process.env.VERCEL
// If you still deploy to GitHub Pages under /My-Portofolio/, keep that base there
const isGitHubPages = !!process.env.GITHUB_ACTIONS

export default defineConfig({
  // On Vercel we want root-relative paths ('/'); on GH Pages we keep the repo subpath.
  base: isVercel ? '/' : (isGitHubPages ? '/My-Portofolio/' : '/'),

  server: {
    host: true,
    port: 5173,
    // Optional: open a page in dev; remove if you don't need it
    open: '/about.html'
  },

  preview: {
    host: true,
    port: 4173
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    // Reasonable defaults for modern browsers; adjust if you need wider support
    target: 'es2019',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 900
  },

  // Example: define environment flags you might use in code
  define: {
    __APP_ENV__: JSON.stringify(process.env.NODE_ENV || 'production')
  }
})
