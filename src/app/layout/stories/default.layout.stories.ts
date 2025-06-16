import type {Meta, StoryObj, Args} from '@storybook/vue3';
// import {vueRouter} from 'storybook-vue3-router';

import DefaultLayout from '@/app/layout/view/default.layout.vue';
import NotFound from '@/app/system/view/not-found.vue';

const meta: Args = {
  title: 'app/layout/view/default-layout',
  component: DefaultLayout,

  render: () => ({
    components: {DefaultLayout},
    template: '<default-layout/>'
  }),

  decorators: [
    // vueRouter([
    //   {
    //     path: '/',
    //     name: 'NotFound',
    //     component: NotFound
    //   }
    // ])
  ],

  tags: ['autodocs']
} satisfies Meta<typeof DefaultLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};
