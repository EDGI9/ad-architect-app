import type {ImageListResponseDTO} from "../dtos/data/ImageListResponse.dto";

export interface SliderImages {
    mapToSliderImageList(data: ImageListResponseDTO[]): Promise<ImageListResponseDTO[] | []>;
}