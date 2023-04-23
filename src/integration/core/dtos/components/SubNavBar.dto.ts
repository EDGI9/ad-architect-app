import {SubNavBarItemDTO} from "./SubNavBarItem.dto"
export interface SubNavBarDTO {
    items?: SubNavBarItemDTO[]
    activeItem?: SubNavBarItemDTO
    onClick?: (item: SubNavBarItemDTO) => void
}