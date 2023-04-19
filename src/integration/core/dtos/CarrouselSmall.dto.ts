import { MouseEvent } from "react";
import { ImageDataDTO } from "./ImageData.dto";

export interface CarrouselSmallDTO {
    slides: Array<ImageDataDTO>
    onClick?: (image: ImageDataDTO) => void
}