import {defineConfig, mergeConfig} from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',

      env: {
        VITE_ENV: 'VITEST',
        VITE_SAMPLE_URL: 'https://jsonplaceholder.typicode.com'
      }
    }
  })
);
