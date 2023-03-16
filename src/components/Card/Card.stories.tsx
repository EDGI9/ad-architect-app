import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderRadius: { control: 'range' },
  },
  args: {
    backgroundColor: "#FFF",
    borderRadius: 10
  },
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = (args) => <Card {...args}>Test</Card>;


