import { ImageListResponseDTO } from "../core/dtos/ImageListResponse.dto";

export interface SliderImagesServiceDriverPort {
    getByArea(area: string): Promise<ImageListResponseDTO[] | []>;
}