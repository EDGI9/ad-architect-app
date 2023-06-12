import { it, describe, expect, beforeAll, afterAll } from "vitest";
import { fireEvent, render, cleanup, RenderResult } from '@testing-library/react';
import { SubNavBar } from "./SubNavBar.js";
import { Services } from "../../integration/services/index";
import { HouseAreaDTO } from "../../integration/core/dtos/HouseArea.dto";




describe('SubNavBar component', () => {
    let component: RenderResult;
    let nav: HTMLElement;
    let navList: HTMLElement;
    let navListItem: HTMLElement[];
    let navListItemButton: HTMLElement;
    let NavBarPaths: HouseAreaDTO[];

    beforeAll(async () => {
        component = render(<SubNavBar />);
        NavBarPaths = await Services.HouseAreas.getAllHouseAreas()
    });

    it.skip('Componen renders properly', () => {

        component.rerender(<SubNavBar 
            items={NavBarPaths} 
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
        expect(navList.children.length).toEqual(NavBarPaths.length);
    });

    it.skip('Component handles user events', () => {
        const firstItem = NavBarPaths[0];
        
        //@ts-ignore
        function handleClick(houseArea):void {
            expect(houseArea.id).toEqual(firstItem.id);
            expect(houseArea.text).toEqual(firstItem.text);
        }

        component.rerender(<SubNavBar 
            items={NavBarPaths} 
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