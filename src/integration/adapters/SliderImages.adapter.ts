import { SliderImagesDrivenPort } from "../ports/SliderImagesReaderDriven.port";
import { ImageListResponseDTO } from "../core/dtos/ImageListResponse.dto";
import { images } from "../../__mock__/images";

export function SliderImagesReaderAdapter(): SliderImagesDrivenPort {

    const data = images as ImageListResponseDTO[];

    async function getByArea(area: string): Promise<ImageListResponseDTO[] | []> {
        const result = data.filter(item => item.area === area);

        if(!result){
            return [];
        }

        return result;
    }


    return {
        getByArea
    };
}