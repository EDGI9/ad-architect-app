import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageTitle } from "./PageTitle"

export default {
  title: 'Referral Name',
  component: PageTitle,
  args: {
    text: "John Doe",
  },
} as ComponentMeta<typeof PageTitle>;

export const Primary: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;


