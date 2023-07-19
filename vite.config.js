import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/sass/resources.scss';"
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [react(), svgr()],
  preview: {
    port: 6005
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/atom-design-system.ts'),
      formats: ['system'],
      fileName: () => 'atom-design-system.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@atom/common'],
      output: {
        intro: `const process = {env: ${JSON.stringify(process.env)}}`
      }
    }
  }
});
