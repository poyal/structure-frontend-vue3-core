import type {Meta, StoryObj, Args} from '@storybook/vue3-vite';
import {expect} from 'storybook/test';

import FooterBar from '@/app/layout/components/footer-bar.vue';

const meta: Args = {
  title: 'app/layout/components/footer-bar',
  component: FooterBar,

  render: (args: any) => ({
    components: {FooterBar},
    setup() {
      return {args};
    },
    template: '<footer-bar/>'
  }),

  tags: ['autodocs']
} satisfies Meta<typeof FooterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {
  play: async ({canvasElement}) => {
    const h1: Element | null = canvasElement.querySelector('footer h1');
    await expect(h1).toHaveTextContent('footer-bar');
  }
};
