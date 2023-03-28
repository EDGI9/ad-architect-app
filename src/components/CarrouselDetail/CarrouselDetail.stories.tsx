import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CarrouselDetail } from "./CarrouselDetail"
import { images } from "../../__mock__/images";

export default {
  title: 'Carrousel Detail',
  component: CarrouselDetail,
  args: {
    image: images.big_image_1,
    text: {
      title: 'Test title',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
  },
} as ComponentMeta<typeof CarrouselDetail>;

export const Primary: ComponentStory<typeof CarrouselDetail> = (args) => <CarrouselDetail {...args} />;


