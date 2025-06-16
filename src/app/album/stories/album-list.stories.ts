import type {Meta, StoryObj, Args} from '@storybook/vue3-vite';
import {expect} from 'storybook/test';

import AlbumList from '@/app/album/view/album-list.vue';

const meta: Args = {
  title: 'app/album/view/album-list',
  component: AlbumList,

  render: () => ({
    components: {AlbumList},
    template: '<album-list />'
  }),

  tags: ['autodocs']
} satisfies Meta<typeof AlbumList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {
  play: async ({canvasElement}) => {
    const button: HTMLButtonElement | null = canvasElement.querySelector('button');
    await expect(button).toHaveTextContent('SHOOT');
  }
};
