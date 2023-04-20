import type { ImageListDTO } from "../core/dtos/ImageList.dto";
import type { ImagesReaderDrivenPort } from "../ports/ImagesReaderDriven.port";
import type { ImagesServiceDriverPort } from "../ports/ImagesServiceDriver.port";
import {ImagesMapper} from "../core/mappers/Images.mapper";

export function ImagesService(reader: ImagesReaderDrivenPort): ImagesServiceDriverPort {
    async function getAllImages(): Promise<ImageListDTO> {
        const response = await reader.getAll();
        return await ImagesMapper.mapToImageList(response);
    }

    return {
        getAllImages
    };
}