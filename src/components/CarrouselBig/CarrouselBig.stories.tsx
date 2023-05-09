import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Services } from "../../integration/services/index";
import { CarrouselBig } from "./CarrouselBig";

//TODO: Replace hardcoded string with an object property fetched from a service    
export default {
  title: 'Carrousel Big',
  component: CarrouselBig,
  args: {
    slides: await Services.Slider.getByArea('KITCHENS'),
  },
} as ComponentMeta<typeof CarrouselBig>;

export const Primary: ComponentStory<typeof CarrouselBig> = (args) => <CarrouselBig {...args} />;


