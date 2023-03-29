import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import {RouterPaths} from "../../router/router-paths";
import { NavBar } from './NavBar';


export default {
  title: 'Nav Bar',
  component: NavBar,
  decorators: [withRouter],
  args: {
    routes: RouterPaths
  }
} as ComponentMeta<typeof NavBar>;

export const Primary: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;


