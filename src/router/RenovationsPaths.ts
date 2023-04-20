import { HouseAreas } from "../integration/core/constants/HouseAreas.constants";
import { SubNavBarItemDTO } from "../integration/core/dtos/SubNavBarItem.dto";
import { RenovationPathsDTO } from "../integration/core/dtos/RenovationPaths.dto";
//TODO: Create service to fetch House areas

export const RenovationPaths: RenovationPathsDTO = Object.values(HouseAreas).map((item) => (<SubNavBarItemDTO>{
        id: item.id,
        text: item.text,
        active: false
}));

