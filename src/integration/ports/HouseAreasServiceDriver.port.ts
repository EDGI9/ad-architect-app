import { HouseAreaDTO } from "../core/dtos/HouseArea.dto";

export interface HouseAreasServiceDriverPort {
    getAllHouseAreas(): Promise<HouseAreaDTO[]>;
}