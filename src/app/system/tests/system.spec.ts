import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/vue';

import NotFound from '@/app/system/view/not-found.vue';
import SampleService from '@/app/system/service/sample.service';

describe('system/not-found.vue', () => {
  test('success init', () => {
    render(NotFound);

    screen.getByText('NOT FOUND');
  });

  test('sample.service.ts', () => {
    const sampleService: SampleService = new SampleService();
    expect(sampleService.iamFalse()).toBeFalsy();
    expect(sampleService.iamTrue()).toBeTruthy();
    expect(sampleService.iamTen()).toBeTypeOf('number');
    expect(sampleService.iamTen()).toBeGreaterThan(9);
  });
});
