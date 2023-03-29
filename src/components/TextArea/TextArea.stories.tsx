import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from "./TextArea"

export default {
  title: 'Text Area',
  component: TextArea,
  argTypes: {
    type: { 
      control: 'select', 
      options: ['primary', 'secondary'] 
    },
  },
  args: {
    type: "secondary",
    placeholder:"The Placeholder"
  },
} as ComponentMeta<typeof TextArea>;

export const Primary: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;


