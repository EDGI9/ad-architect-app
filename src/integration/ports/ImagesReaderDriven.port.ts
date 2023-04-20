import { ImageListResponseDTO } from "../core/dtos/ImageListResponse.dto";

export interface ImagesReaderDrivenPort {
    getAll(): Promise<ImageListResponseDTO[]>;
}