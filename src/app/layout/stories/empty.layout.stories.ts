import type {Meta, StoryObj, Args} from '@storybook/vue3';
import {vueRouter} from 'storybook-vue3-router';

import EmptyLayout from '@/app/layout/view/empty.layout.vue';
import NotFound from '@/app/system/view/not-found.vue';

const meta: Args = {
  title: 'app/layout/view/empty-layout',
  component: EmptyLayout,

  render: () => ({
    components: {EmptyLayout},
    template: '<empty-layout/>'
  }),

  decorators: [
    vueRouter([
      {
        path: '/',
        name: 'NotFound',
        component: NotFound
      }
    ])
  ],

  tags: ['autodocs']
} satisfies Meta<typeof EmptyLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};
