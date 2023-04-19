import { faker } from '@faker-js/faker';
import {HouseAreas} from "../integration/core/constants/house-areas.constants";
import {images} from "./images"

const houseAreas: string[] = Object.keys(HouseAreas)

const imageList= [
    {
        src: images.INTERIOR_1,
        area: HouseAreas.INTERIORS.id
    },
    {
        src: images.INTERIOR_2,
        area: HouseAreas.INTERIORS.id
    },
    {
        src: images.INTERIOR_3,
        area: HouseAreas.INTERIORS.id
    },
    {
        src: images.INTERIOR_4,
        area: HouseAreas.INTERIORS.id
    },
    {
        src: images.INTERIOR_5,
        area: HouseAreas.INTERIORS.id
    },
    {
        src: images.KITCHEN_1,
        area: HouseAreas.KITCHENS.id
    },
    {
        src: images.KITCHEN_2,
        area: HouseAreas.KITCHENS.id
    },
    {
        src: images.KITCHEN_3,
        area: HouseAreas.KITCHENS.id
    },
    {
        src: images.KITCHEN_4,
        area: HouseAreas.KITCHENS.id
    },
    {
        src: images.KITCHEN_5,
        area: HouseAreas.KITCHENS.id
    },
    {
        src: images.GARDEN_1,
        area: HouseAreas.GARDENS.id
    },
    {
        src: images.GARDEN_2,
        area: HouseAreas.GARDENS.id
    },
    {
        src: images.GARDEN_3,
        area: HouseAreas.GARDENS.id
    },
    {
        src: images.GARDEN_4,
        area: HouseAreas.GARDENS.id
    },
    {
        src: images.GARDEN_5,
        area: HouseAreas.GARDENS.id
    },
    {
        src: images.BATHROOM_1,
        area: HouseAreas.BATHROOM.id
    },
    {
        src: images.BATHROOM_2,
        area: HouseAreas.BATHROOM.id
    },
    {
        src: images.BATHROOM_3,
        area: HouseAreas.BATHROOM.id
    },
    {
        src: images.BATHROOM_4,
        area: HouseAreas.BATHROOM.id
    },
    {
        src: images.BATHROOM_5,
        area: HouseAreas.BATHROOM.id
    },
]

const generateSlider = () => {
    let result = {};
    
    for (const area of houseAreas) {

        const areaImages = imageList.filter(item => item.area === area);
        const generatedImageList = areaImages.map((item, index) => ({
            id: index + 1,   
            src: item.src,
            name: faker.lorem.word(),
            text: {
                title: faker.name.jobDescriptor(),
                description: faker.lorem.lines(1)
            }
        }));
        
        result = {...result, [area]: generatedImageList};
    }
    
    return result
}

export const slider = generateSlider();