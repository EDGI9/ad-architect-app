import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from './Title';

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    type: { 
      control: 'select', 
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']  
    },
  },
  args: {
    type: "h1",
    text: "Test title"
  },
} as ComponentMeta<typeof Title>;

export const Primary: ComponentStory<typeof Title> = (args) => <Title {...args} />;


