import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Services } from "../../integration/services/index";
import { CarrouselDetail } from "./CarrouselDetail"

const images = await Services.Images.getAllImages();

export default {
  title: 'Carrousel Detail',
  component: CarrouselDetail,
  args: {
    image: images.BIG_IMG_1,
    text: {
      title: 'Test title',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
  },
} as ComponentMeta<typeof CarrouselDetail>;

export const Primary: ComponentStory<typeof CarrouselDetail> = (args) => <CarrouselDetail {...args} />;


