import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from "./TextInput"

export default {
  title: 'Text Input',
  component: TextInput,
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
} as ComponentMeta<typeof TextInput>;

export const Primary: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;


