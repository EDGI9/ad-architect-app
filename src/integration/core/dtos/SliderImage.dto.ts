import { ImageDataDTO } from "./ImageData.dto";

export interface SliderImageDTO extends ImageDataDTO {
    id: number
    text: {
        title: string
        description: string
    }
}