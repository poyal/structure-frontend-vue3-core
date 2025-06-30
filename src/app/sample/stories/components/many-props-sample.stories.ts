import type {Meta, StoryObj, Args} from '@storybook/vue3';

import ManyPropsSample from '@/app/sample/components/many-props-sample.vue';
import {SampleEnum} from '@/app/sample/enum/sample.enum';

const meta: Args = {
  title: 'app/sample/components/many-props-sample',
  component: ManyPropsSample,

  render: (args: any) => ({
    components: {ManyPropsSample},
    setup() {
      return {args};
    },
    template:
      '<many-props-sample :count="args.count" :msg="args.msg" :types="args.types" :sample-enum="args.sampleEnum"/>'
  }),

  argTypes: {
    types: {
      control: 'select',
      options: ['type1', 'type2', 'type3']
    },

    sampleEnum: {
      control: 'select',
      options: [SampleEnum.TYPE1, SampleEnum.TYPE2, SampleEnum.TYPE3, SampleEnum.TYPE4]
    }
  },

  tags: ['autodocs']
} satisfies Meta<typeof ManyPropsSample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DEFAULT: Story = {};

export const DEFAULT2: Story = {
  args: {
    msg: 'test',
    count: 0,
    types: 'type2',
    sampleEnum: SampleEnum.TYPE4
  }
};
