import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import {RouterPaths} from "../../router/router-paths";
import { Footer } from './Footer';


export default {
  title: 'Footer',
  component: Footer,
  decorators: [withRouter],
  args: {
    routes: RouterPaths
  }
} as ComponentMeta<typeof Footer>;

export const Primary: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;


