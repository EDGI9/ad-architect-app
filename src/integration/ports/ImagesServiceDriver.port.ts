import { ImageListDTO } from "../core/dtos/data/ImageList.dto";

export interface ImagesServiceDriverPort {
    getAllImages(): Promise<ImageListDTO>;
}