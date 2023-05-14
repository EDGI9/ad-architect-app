import type { ImageListResponseDTO } from "../core/dtos/ImageListResponse.dto";
import type { SliderImagesDrivenPort } from "../ports/SliderImagesReaderDriven.port";
import type { SliderImagesServiceDriverPort } from "../ports/SliderImagesServiceDriver.port";
import { SliderImagesMapper } from "../core/mappers/SliderImages.mapper";

export function SliderService(reader: SliderImagesDrivenPort): SliderImagesServiceDriverPort {
    async function getByArea(area: string): Promise<ImageListResponseDTO[] | []> {
        const response = await reader.getByArea(area);

        if (!response) {
            return []
        }
        //@ts-ignore
        return await SliderImagesMapper.mapToSliderImageList(response);
    }

    return {
        getByArea
    };
}