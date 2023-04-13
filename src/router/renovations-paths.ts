import {HouseAreas} from "../integration/core/constants/house-areas.constants";
import {Components} from "../interfaces/Components.d";

//TODO: Add interface to "RenovationPaths"
export const RenovationPaths = Object.values(HouseAreas).map((item) => (<Components.SubNAvBarItem>{
        id: item.id,
        text: item.text,
        active: false
}));

