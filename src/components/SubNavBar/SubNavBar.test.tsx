import { it, describe, expect, beforeAll, afterAll } from "vitest";
import { fireEvent, render, cleanup, RenderResult } from '@testing-library/react';
import { RenovationPaths } from "../../router/RenovationsPaths.js";
import { SubNavBar } from "./SubNavBar.js";
import { HouseAreaDTO } from "../../integration/core/dtos/HouseArea.dto.js";


describe('SubNavBar component', () => {
    let component: RenderResult;
    let nav: HTMLElement;
    let navList: HTMLElement;
    let navListItem: HTMLElement[];
    let navListItemButton: HTMLElement;

    it('Componen renders properly', () => {

        component = render(<SubNavBar 
            items={RenovationPaths} 
        />); 

        nav = component.getByTestId('qa-sub-nav-bar');
        navList = component.getByTestId('qa-sub-nav-bar__list');
        navListItem = component.getAllByTestId('qa-sub-nav-bar__list-item');
        //@ts-ignore
        navListItemButton = navListItem[0].children[0];
               
        expect(nav).toBeTruthy();
        expect(navList).toBeTruthy();
        expect(navListItem).toBeTruthy();
        expect(navListItemButton).toBeTruthy();
        expect(navList.children.length).toEqual(RenovationPaths.length);
    });

    it('Component handles user events', () => {
        const firstItem = RenovationPaths[0];
        
        function handleClick(houseArea: HouseAreaDTO):void {
            expect(houseArea.id).toEqual(firstItem.id);
            expect(houseArea.text).toEqual(firstItem.text);
        }

        component = render(<SubNavBar 
            items={RenovationPaths} 
            onClick={handleClick} 
        />);  
        
        expect(navListItem).toBeTruthy();
        expect(navListItemButton).toBeTruthy();

        fireEvent.click(navListItemButton);
    });


    afterAll(() => {
        component.unmount();
        cleanup();
    }); 
});