import { HouseAreas } from "../integration/core/constants/HouseAreas.constants";
import { RenovationPathsDTO } from "../integration/core/dtos/RenovationPaths.dto";

//TODO: Create service to fetch House areas
export const RenovationPaths: RenovationPathsDTO[] = Object.values(HouseAreas).map((item) => (<RenovationPathsDTO>{
        id: item.id,
        text: item.text,
}));

