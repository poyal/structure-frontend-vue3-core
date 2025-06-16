import 'reflect-metadata';
import {App} from 'vue';
import {createPinia} from 'pinia';
import type {Preview} from '@storybook/vue3-vite';
import {setup} from '@storybook/vue3-vite';

import {SetFilter} from '../src/app/shared/filter/shared.filter';
import {SetDirective} from '../src/app/shared/directive/shared.directive';

import '@/assets/main.scss';
import {INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS} from 'storybook/viewport';

setup((app: App) => {
  app.use(createPinia());
  SetFilter(app);
  SetDirective(app);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },

      layout: 'fullscreen',
      actions: {
        handles: ['click']
      }
    },

    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS
      }
    }
  }
};

export default preview;
