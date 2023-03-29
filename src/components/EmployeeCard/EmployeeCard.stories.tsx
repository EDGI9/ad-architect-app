import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmployeeCard } from './EmployeeCard';
import { slider } from "../../__mock__/slider";


export default {
  title: 'Employee Card',
  component: EmployeeCard,
  args: {
    image: slider[0],
    title: "Test title",
    subtitle: "Test subtitle",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
} as ComponentMeta<typeof EmployeeCard>;

export const Primary: ComponentStory<typeof EmployeeCard> = (args) => <EmployeeCard {...args} />;


