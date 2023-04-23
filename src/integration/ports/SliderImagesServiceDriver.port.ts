import { ImageListResponseDTO } from "../core/dtos/data/ImageListResponse.dto";

export interface SliderImagesServiceDriverPort {
    getByArea(area: string): Promise<ImageListResponseDTO[] | []>;
}