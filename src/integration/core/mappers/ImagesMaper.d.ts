import type {ImageListResponseDTO} from "../dtos/ImageListResponse.dto";
import type {ImageListDTO} from "../dtos/ImageList.dto";

export interface ImageMapper {
    mapToImageList(data: ImageListResponseDTO[]): Promise<ImageListDTO>;
}