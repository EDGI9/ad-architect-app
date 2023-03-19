import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SectionBubble } from "./SectionBubble"

export default {
  title: 'Section Bubble',
  component: SectionBubble,
  argTypes: {
    align: { 
      control: 'select', 
      options: ['left', 'right'] ,
    },
  },
  args: {
    title: 'Text Title',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    align: 'left'
  },
} as ComponentMeta<typeof SectionBubble>;

export const Primary: ComponentStory<typeof SectionBubble> = (args) => <SectionBubble {...args} />;


