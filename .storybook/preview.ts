import 'reflect-metadata';
import {App} from 'vue';
import {createPinia} from 'pinia';
import type {Preview} from '@storybook/vue3';
import {setup} from '@storybook/vue3';
import {withActions} from '@storybook/addon-actions/decorator';

import {SetFilter} from '../src/app/shared/filter/shared.filter';
import {SetDirective} from '../src/app/shared/directive/shared.directive';

import '@/assets/main.scss';
import {INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

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
    },

    decorators: [withActions]
  }
};

export default preview;
