import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReferralQuote } from "./ReferralQuote"

export default {
  title: 'Referral Quote',
  component: ReferralQuote,
  args: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
} as ComponentMeta<typeof ReferralQuote>;

export const Primary: ComponentStory<typeof ReferralQuote> = (args) => <ReferralQuote {...args} />;


