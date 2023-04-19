import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Image } from "./Image"
import { images } from "../../__mock__/images";

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    height: { 
      control: { 
        type: 'range', 
        min: 30, 
        max: 500, 
        step: 5,
      },
    },
    width: { 
      control: { 
        type: 'range', 
        min: 30, 
        max: 500, 
        step: 5,
      },
    },
  },
  args: {
    image: images.BIG_IMG_1,
    title: "John Doe",
    width: 250,
    height: 250,
  },
} as ComponentMeta<typeof Image>;

export const Primary: ComponentStory<typeof Image> = (args) => <Image {...args} />;


