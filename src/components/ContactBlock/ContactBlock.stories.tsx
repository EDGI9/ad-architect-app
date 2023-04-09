import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContactBlock } from './ContactBlock';

export default {
  title: 'ContactBlock Card',
  component: ContactBlock,
  args: {
    title: "Test title",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
} as ComponentMeta<typeof ContactBlock>;

export const Primary: ComponentStory<typeof ContactBlock> = (args) => <ContactBlock {...args} />;


