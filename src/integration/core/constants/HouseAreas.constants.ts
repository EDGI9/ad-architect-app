import { HouseAreaListDTO } from "../dtos/data/HouseAreaList.dto";

export const HouseAreas: HouseAreaListDTO = {
    KITCHENS: {
        id:'KITCHENS', 
        text: 'Kitchens'
    },
    EXTERIOR: {
        id:'EXTERIOR', 
        text: 'Exterior'
    },
    EXTERIORS: {
        id:'EXTERIORS', 
        text: 'Exteriors'
    },
    INTERIORS: {
        id:'INTERIORS', 
        text: 'Interiors'
    },
    BATHROOM: {
        id:'BATHROOM', 
        text: 'Bathroom'
    },
    GARDENS: {
        id:'GARDENS', 
        text: 'Gardens'
    },
} as const;