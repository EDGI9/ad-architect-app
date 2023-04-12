import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter } from './Counter';

export default {
  title: 'Counter',
  component: Counter,
  argTypes: {
    type: { 
      control: 'select', 
      options: ['primary', 'secondary'] 
    },
  },
  args: {
    type: 'primary',
    number: 1,
  },
} as ComponentMeta<typeof Counter>;

export const Primary: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;
