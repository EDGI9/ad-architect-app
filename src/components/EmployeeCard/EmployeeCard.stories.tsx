import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Services } from "../../integration/services/index";
import { EmployeeCard } from './EmployeeCard';

export default {
  title: 'Employee Card',
  component: EmployeeCard,
  args: {
    image: await Services.Images.getAllImages().then(res => res.EMPLOYEE_1),
    title: "Test title",
    subtitle: "Test subtitle",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
} as ComponentMeta<typeof EmployeeCard>;

export const Primary: ComponentStory<typeof EmployeeCard> = (args) => <EmployeeCard {...args} />;


