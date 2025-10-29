// vite.config.js
import { defineConfig } from 'vite'

const isVercel = !!process.env.VERCEL
const isGitHubPages = !!process.env.GITHUB_ACTIONS

export default defineConfig({
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

    // 👇 IMPORTANT: list every HTML page you want built
    rollupOptions: {
      input: {
        index: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        techstack: 'tech-stack.html',
        aboutreadmore: 'about-read-more.html'
      }
    }
  }
})
