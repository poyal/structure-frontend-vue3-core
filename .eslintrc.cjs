/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root:    true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', 'plugin:storybook/recommended'],

  ignorePatterns: ['build', 'dist', 'public'],

  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    'no-console': ['error', {allow: ['warn', 'error', 'info']}],

    'quotes': ['error', 'single', {'allowTemplateLiterals': true}],

    'semi': ['error', 'always'],

    'no-extra-semi': 'error',

    'no-debugger': 'error',

    'semi-spacing': 'error',

    'vue/multi-word-component-names': ['off'],
    'vue/no-mutating-props':          'off',

    'no-extra-boolean-cast': 'off',

    'no-case-declarations': 'off',
  },
};
