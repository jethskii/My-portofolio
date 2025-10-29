// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

// __dirname-safe for ESM configs
const __dirname = fileURLToPath(new URL('.', import.meta.url))

const isVercel = !!process.env.VERCEL
const isGitHubPages = !!process.env.GITHUB_ACTIONS

export default defineConfig({
  // Root on Vercel; repo subpath on GitHub Pages
  base: isVercel ? '/' : (isGitHubPages ? '/My-Portofolio/' : '/'),

  server: { host: true, port: 5173, open: '/about.html' },
  preview: { host: true, port: 4173 },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2019',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 900,

    // Explicit MPA entries — the files must be at the repo root (not in dist/)
    rollupOptions: {
      input: {
        index:         resolve(__dirname, 'index.html'),
        about:         resolve(__dirname, 'about.html'),
        contact:       resolve(__dirname, 'contact.html'),
        techstack:     resolve(__dirname, 'tech-stack.html'),
        aboutreadmore: resolve(__dirname, 'about-read-more.html'),
      },
    },
  },
})
