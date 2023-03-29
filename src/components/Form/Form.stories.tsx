import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Form } from './Form';



export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

export const Primary: ComponentStory<typeof Form> = (args) => <Form />;


