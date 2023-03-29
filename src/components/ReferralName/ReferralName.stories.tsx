import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReferralName } from "./ReferralName"

export default {
  title: 'Referral Name',
  component: ReferralName,
  args: {
    title: "John Doe",
    subtitle: "Plumber",
  },
} as ComponentMeta<typeof ReferralName>;

export const Primary: ComponentStory<typeof ReferralName> = (args) => <ReferralName {...args} />;


