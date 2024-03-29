import type {SliderImages as SliderImagesInterface} from "./SliderImages";
import type {ImageDataDTO} from "../dtos/ImageData.dto";
import type {SliderImageDTO} from "../dtos/SliderImage.dto";
import type {ImageListResponseDTO} from "../dtos/ImageListResponse.dto";
import { faker } from "@faker-js/faker";

async function mapToSliderImageList(data: ImageListResponseDTO[]): Promise<SliderImageDTO[] | []> {
    let response: SliderImageDTO[] = []
    
    response = data.map((item: ImageDataDTO , index: number) => ({
        id: `${item.id}-${index + 1}`,
        name: faker.lorem.word(),
        src: {
            src: item.src,
            name: item.name
        },
        text: {
            title: faker.name.jobDescriptor(),
            description: faker.lorem.lines(1)
        }
    }))
    return response
}


export const SliderImagesMapper: SliderImagesInterface = {
    mapToSliderImageList,
} as const;