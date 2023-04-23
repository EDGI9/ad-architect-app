import { ImageListResponseDTO } from "../core/dtos/data/ImageListResponse.dto";

export interface SliderImagesDrivenPort {
    getByArea(area: string): Promise<ImageListResponseDTO[] | []>;
}