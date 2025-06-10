import 'reflect-metadata';
import {describe, test, expect} from 'vitest';
import {render} from '@testing-library/vue';

import {MOCK_RENDER} from '@/core/testing-library/testing-library.config';

import HelloWorld from '@/app/sample/view/hello-world.vue';

describe('sample/hello-world.vue', () => {
  test('success init', () => {
    render(HelloWorld, {
      ...MOCK_RENDER
    });

    const sample: Element | null = document.querySelector('.vite-sample');
    const env: Element | null = document.querySelector('.vite-env');

    console.info('sample.textContent => ', sample?.textContent);
    console.info('env.textContent => ', env?.textContent);

    expect(sample?.textContent).toEqual('SAMPLE');
    expect(env?.textContent).toEqual('VITEST');
  });
});
