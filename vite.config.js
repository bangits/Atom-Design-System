import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: "./",
  css: {
    preprocessorOptions: {
      scss: {
        //🚀🚀🚀🚀🚀 THIS ADDITIONAL SCSS IS BOUND WITH RESOURCES.SCSS 🚀🚀🚀🚀🚀
        additionalData: [
        "@import './src/sass/abstracts/variables';",
        "@import './src/sass/abstracts/mixins';",
        "@import './src/sass/abstracts/functions';",
        // Base
        "@import './src/sass/base/variables';",
        "@import './src/sass/base/functions';",
        "@import './src/sass/base/mixins';",
        // Components
        "@import './src/sass/components/atoms/main';",
        "@import './src/sass/components/molecules/main';",
        "@import './src/sass/components/organisms/main';",
        "@import './src/sass/components/pages/main';",
        "@import './src/sass/components/templates/main';",
        ].join('\n')
      }
    }
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src'),
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
      entry: path.resolve(__dirname, "src/atom-design-system.ts"),
      formats: ["system"],
      fileName: () => 'atom-design-system.js',
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        intro: `const process = {env: ${JSON.stringify(process.env)}}`,
      },
    },
  },
});