import type {StorybookConfig} from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  env: (config) => ({
    ...config,

    VITE_ENV: 'STORYBOOK',
    VITE_SAMPLE_URL: 'http://localhost:8080'
  })
};

export default config;
