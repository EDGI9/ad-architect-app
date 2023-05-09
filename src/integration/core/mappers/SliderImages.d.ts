import type {ImageListResponseDTO} from "../dtos/ImageListResponse.dto";
import type {SliderImageDTO} from "../dtos/SliderImage.dto";

export interface SliderImages {
    mapToSliderImageList(data: ImageListResponseDTO[]): Promise<SliderImageDTO[] | []>;
}