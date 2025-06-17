import 'reflect-metadata';
import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';

// @ts-ignore
import {manualChunks} from './vite.bundle.config';

export default defineConfig({
  plugins: [tsconfigPaths(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: manualChunks
      }
    }
  }
});
