import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Services } from "../../integration/services/index";
import { CarrouselSmall } from "./CarrouselSmall"

//TODO: Replace hardcoded string with an object property fetched from a service    
export default {
  title: 'Carrousel Small',
  component: CarrouselSmall,
  args: {
    slides: await Services.Slider.getByArea('KITCHENS')
  },
} as ComponentMeta<typeof CarrouselSmall>;

export const Primary: ComponentStory<typeof CarrouselSmall> = (args) => <CarrouselSmall {...args} />;


