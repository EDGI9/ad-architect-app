import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CarrouselSmall } from "./CarrouselSmall"
import { slider } from "../../__mock__/slider";

export default {
  title: 'Carrousel Small',
  component: CarrouselSmall,
  args: {
    slides: slider.small_slider
  },
} as ComponentMeta<typeof CarrouselSmall>;

export const Primary: ComponentStory<typeof CarrouselSmall> = (args) => <CarrouselSmall {...args} />;


