import { ImageDataDTO } from "./ImageData.dto";

export interface CarrouselDetailDTO {
    image: ImageDataDTO
    text: {
        title: string
        description: string
    }
}