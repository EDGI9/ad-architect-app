import { ImageDataDTO } from "./ImageData.dto";

export interface ImageDTO {
    image: ImageDataDTO
    height?: number
    width?: number
    imgClassName?: string
    className?: string
    onClick?: (image: ImageDataDTO) => void
}