import type {ImageMapper as ImagesMapperInterface} from "./ImagesMaper";
import type {ImageListDTO} from "../dtos/ImageList.dto";
import type {ImageDataDTO} from "../dtos/ImageData.dto";
import type {ImageListResponseDTO} from "../dtos/ImageListResponse.dto";



async function mapToImageList(data: ImageListResponseDTO[]): Promise<ImageListDTO> {
    /* return data.map( res => (<ImageDataDTO>{
        id: res.id,
        name: res.name,
    })); */
    let response: ImageListDTO = {}
    data.forEach((item: ImageDataDTO) => {
        response = {...response, [item.id]: {
            id: item.id,
            src: item.src,
            name: item.name
        }}
    })
    return response
}


export const ImagesMapper: ImagesMapperInterface = {
    mapToImageList,
} as const;