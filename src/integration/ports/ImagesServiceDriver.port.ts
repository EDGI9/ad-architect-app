import { ImageListDTO } from "../core/dtos/ImageList.dto";

export interface ImagesServiceDriverPort {
    getAllImages(): Promise<ImageListDTO>;
}