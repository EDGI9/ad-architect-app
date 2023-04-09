import { faker } from '@faker-js/faker';
import {Images} from "../interfaces/Image.d";
import bigSliderImg1 from "../assets/images/bigSliderImg1.png";
import bigSliderImg2 from "../assets/images/bigSliderImg2.png";
import bigSliderImg3 from "../assets/images/bigSliderImg3.png";
import bigSliderImg4 from "../assets/images/bigSliderImg4.png";

const images = [
    {
        src: bigSliderImg1,
        name: 'bigSliderImg1'
    },
    {
        src: bigSliderImg2,
        name: 'bigSliderImg2'
    },
    {
        src: bigSliderImg3,
        name: 'bigSliderImg3'
    },
    {
        src: bigSliderImg4,
        name: 'bigSliderImg4'
    },
]

export const slider:Images.Image[] = images.map((item, index) => {
    return { 
        id: index + 1,   
        src: item.src,
        name: item.name,
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines(1)
        }
    }
})