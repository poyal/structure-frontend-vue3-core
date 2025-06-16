import type {Meta, StoryObj, Args} from '@storybook/vue3-vite';
import {expect} from 'storybook/test';

import HeaderBar from '@/app/layout/components/header-bar.vue';

const meta: Args = {
  title: 'app/layout/components/header-bar',
  component: HeaderBar,
  render: (args: any) => ({
    components: {HeaderBar},
    setup() {
      return {args};
    },
    template: '<header-bar/>'
  }),

  tags: ['autodocs']
} satisfies Meta<typeof HeaderBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {
  play: async ({canvasElement}) => {
    const h1: Element | null = canvasElement.querySelector('header h1');
    await expect(h1).toHaveTextContent('header-bar');
  }
};
