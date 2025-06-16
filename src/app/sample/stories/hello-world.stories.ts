import type {Meta, StoryObj, Args} from '@storybook/vue3-vite';

import HelloWorld from '@/app/sample/view/hello-world.vue';

const meta: Args = {
  title: 'app/sample/view/hello-world',
  component: HelloWorld,
  render: () => ({
    components: {HelloWorld},
    template: '<hello-world />'
  }),

  tags: ['autodocs']
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};
