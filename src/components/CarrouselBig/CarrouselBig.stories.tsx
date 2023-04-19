import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CarrouselBig } from "./CarrouselBig"
import { slider } from "../../__mock__/slider";

export default {
  title: 'Carrousel Big',
  component: CarrouselBig,
  args: {
    slides: slider
  },
} as ComponentMeta<typeof CarrouselBig>;

export const Primary: ComponentStory<typeof CarrouselBig> = (args) => <CarrouselBig {...args} />;


