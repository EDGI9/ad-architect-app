import { ImageListResponseDTO } from "../core/dtos/data/ImageListResponse.dto";

export interface ImagesReaderDrivenPort {
    getAll(): Promise<ImageListResponseDTO[]>;
}