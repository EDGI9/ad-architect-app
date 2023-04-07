import { faker } from '@faker-js/faker';
import {Images} from "../interfaces/Image.d";
import bigSliderImg1 from "../assets/images/bigSliderImg1.png";
import bigSliderImg2 from "../assets/images/bigSliderImg2.png";
import bigSliderImg3 from "../assets/images/bigSliderImg3.png";
import bigSliderImg4 from "../assets/images/bigSliderImg4.png";
import smallSliderImg1 from "../assets/images/smallSliderImg1.png";
import smallSliderImg2 from "../assets/images/smallSliderImg2.png";
import smallSliderImg3 from "../assets/images/smallSliderImg3.png";
import smallSliderImg4 from "../assets/images/smallSliderImg4.png";

const bigImageSlider: Images.Image[] = [
    {
        src: bigSliderImg1,
        name: 'bigSliderImg1',
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines( 1)
        }
    },
    {
        src: bigSliderImg2,
        name: 'bigSliderImg2',
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines( 1)
        }
    },
    {
        src: bigSliderImg3,
        name: 'bigSliderImg3',
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines( 1)
        }
    },
    {
        src: bigSliderImg4,
        name: 'bigSliderImg4',
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines( 1)
        }
    }
]

const smallImageSlider: Images.Image[] = [
    {
        src: smallSliderImg1,
        name: 'smallSliderImg1',
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines( 1)
        }
    },
    {
        src: smallSliderImg2,
        name: 'smallSliderImg2',
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines( 1)
        }
    },
    {
        src: smallSliderImg3,
        name: 'smallSliderImg3',
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines( 1)
        }
    },
    {
        src: smallSliderImg4,
        name: 'smallSliderImg4',
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines( 1)
        }
    }
]

export const slider = {
    big_slider : bigImageSlider,
    small_slider : smallImageSlider,
}
