import { ImageListResponseDTO } from "../core/dtos/ImageListResponse.dto";

export interface SliderImagesDrivenPort {
    getByArea(area: string): Promise<ImageListResponseDTO[] | []>;
}