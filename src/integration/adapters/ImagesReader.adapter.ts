import { ImagesReaderDrivenPort } from "../ports/ImagesReaderDriven.port";
import { ImageListResponseDTO } from "../core/dtos/ImageListResponse.dto";
import { images } from "../../__mock__/images";

export function ImagesReaderAdapter(): ImagesReaderDrivenPort {

    const data = images as ImageListResponseDTO[];

    async function getAll(): Promise<ImageListResponseDTO[]> {
        return data;
    }


    return {
        getAll
    };
}