import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmployeeCard } from './EmployeeCard';
import { slider } from "../../__mock__/slider";


export default {
  title: 'Employee Card',
  component: EmployeeCard,
  args: {
    title: "Test title",
    text: "Test EmployeeCard"
  },
} as ComponentMeta<typeof EmployeeCard>;

export const Primary: ComponentStory<typeof EmployeeCard> = (args) => <EmployeeCard {...args} image={slider[0]}/>;


