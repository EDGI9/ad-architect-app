import type {ImageListResponseDTO} from "../dtos/data/ImageListResponse.dto";
import type {SliderImageDTO} from "../dtos/data/SliderImage.dto";

export interface SliderImages {
    mapToSliderImageList(data: ImageListResponseDTO[]): Promise<SliderImageDTO[] | []>;
}