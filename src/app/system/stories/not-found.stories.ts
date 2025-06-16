import type {Meta, StoryObj, Args} from '@storybook/vue3-vite';

import NotFound from '@/app/system/view/not-found.vue';

const meta: Args = {
  title: 'app/system/view/not-found',
  component: NotFound,

  render: () => ({
    components: {NotFound},
    template: '<not-found />'
  }),

  tags: ['autodocs']
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};
