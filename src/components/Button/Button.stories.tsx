import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: { 
      control: 'select', 
      options: ['primary', 'secondary'] 
    },
  },
  args: {
    type: 'primary',
    text: 'Button',
  },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => <Button {...args} />;
