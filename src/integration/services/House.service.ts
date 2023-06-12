import type { HouseAreaDTO } from "../core/dtos/HouseArea.dto";
import type { HouseAreasReaderDrivenPort } from "../ports/HouseAreasReaderDriven.port";
import type { HouseAreasServiceDriverPort } from "../ports/HouseAreasServiceDriver.port";

export function HouseService(reader: HouseAreasReaderDrivenPort): HouseAreasServiceDriverPort {
    async function getAllHouseAreas(): Promise<HouseAreaDTO[]> {
        const response = await reader.getAllHouseAreas();
        
        if (!response) {
            return []
        }
        
        return Object.values(response).map((item) => (<HouseAreaDTO>{
            id: item.id,
            text: item.text,
        }))
    }

    return {
        getAllHouseAreas
    };
}