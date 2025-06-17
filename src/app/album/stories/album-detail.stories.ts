import type {Meta, StoryObj, Args} from '@storybook/vue3';
import {vueRouter} from 'storybook-vue3-router';

import AlbumDetail from '@/app/album/view/album-detail.vue';

const meta: Args = {
  title: 'app/album/view/album-detail',
  component: AlbumDetail,

  render: () => ({
    components: {AlbumDetail},
    template: '<router-view/>'
  }),

  decorators: [
    vueRouter(
      [
        {
          path: '/album/detail/:id',
          name: 'AlbumDetail',
          component: AlbumDetail
        }
      ],
      {
        initialRoute: '/album/detail/1'
      }
    )
  ],

  tags: ['autodocs,']
} satisfies Meta<typeof AlbumDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};
