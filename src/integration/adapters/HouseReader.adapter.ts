import { HouseAreasReaderDrivenPort } from "../ports/HouseAreasReaderDriven.port";
import { ImageDataDTO } from "../core/dtos/ImageData.dto";
import { HouseAreaListDTO } from "../core/dtos/HouseAreaList.dto";
import { HouseAreas } from "../core/constants/HouseAreas.constants";


export function HouseReaderAdapter(): HouseAreasReaderDrivenPort {

    const data = HouseAreas as HouseAreaListDTO;

    async function getAllHouseAreas(): Promise<HouseAreaListDTO> {
        return data;
    }


    return {
        getAllHouseAreas
    };
}