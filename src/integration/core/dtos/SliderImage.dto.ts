import { ImageDataDTO } from "./ImageData.dto";

export interface SliderImage extends ImageDataDTO {
    id: number
    text: {
        title: string
        description: string
    }
}