import { HouseAreaListDTO } from "../core/dtos/HouseAreaList.dto";

export interface HouseAreasReaderDrivenPort {
    getAllHouseAreas(): Promise<HouseAreaListDTO>;
}