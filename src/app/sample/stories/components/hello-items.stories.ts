import type {Meta, StoryObj, Args} from '@storybook/vue3';
import {expect} from '@storybook/test';

import HelloItems from '@/app/sample/components/hello-items.vue';

const meta: Args = {
  title: 'app/sample/components/hello-items',
  component: HelloItems,
  render: (args: any) => ({
    components: {HelloItems},
    setup() {
      return {args};
    },
    template: '<hello-items :count="args.count" :msg="args.msg" />'
  }),

  tags: ['autodocs']
} satisfies Meta<typeof HelloItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {
  args: {
    msg: 'test',
    count: 0
  },
  play: async ({canvasElement}) => {
    const h1: NodeListOf<HTMLHeadElement> = canvasElement.querySelectorAll('h1');
    await expect(h1).toHaveLength(11);
  }
};

export const DEFAULT2: Story = {
  args: {
    msg: 'test2',
    count: 4
  },
  play: async ({canvasElement}) => {
    const h1: NodeListOf<HTMLHeadElement> = canvasElement.querySelectorAll('h1');
    await expect(h1).toHaveLength(6);
  }
};
