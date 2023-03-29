import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SubNavBar } from "./SubNavBar"

export default {
  title: 'Sub Nav Bar',
  component: SubNavBar,
  args: {
    items: ['Menu 1', 'Menu 2', 'Menu 3']
  },
} as ComponentMeta<typeof SubNavBar>;

export const Primary: ComponentStory<typeof SubNavBar> = (args) => <SubNavBar {...args} />;


