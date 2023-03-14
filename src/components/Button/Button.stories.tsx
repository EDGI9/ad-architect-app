/* import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button text="Button" type="primary" />;
export const Secondary: ComponentStory<typeof Button> = () => <Button text="Button" type="secondary"/>; */


import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  text: 'Button',
};

