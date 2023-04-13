import {it, describe, expect, vi} from "vitest";
import { fireEvent, render, cleanup, RenderResult } from '@testing-library/react';
import {SubNavBar} from "./SubNavBar.js"
import {RenovationPaths} from "../../router/renovations-paths.js";
import {Components} from "../../interfaces/Components.d";
import { exec } from "@faker-js/faker/modules/helpers/unique.js";


describe('SubNavBar component', () => {
    const props: Components.SubNavBar = {
        items: RenovationPaths,
    };
    

    afterAll(() => {
        cleanup();
    });

    it('It should render properly', async () => {

        //think about the option of having items optional
        const component = render(<SubNavBar items={RenovationPaths}/>);

        const nav = component.getByTestId('qa-sub-nav-bar');
        const navList = component.getByTestId('qa-sub-nav-bar__list');
        const navListItem = component.getAllByTestId('qa-sub-nav-bar__list-item');
        const navListItemButton = navListItem[0].children[0];
               
        expect(nav).toBeTruthy();
        expect(navList).toBeTruthy();
        expect(navListItem).toBeTruthy();
        expect(navListItemButton).toBeTruthy();
        expect(navList.children.length).toEqual(props.items.length);

        component.unmount();
    });

    it.only('It should handle user events and emit the selected item information', async () => {

        const firstItem = RenovationPaths[0];

        function handleClick(houseArea: Components.SubNAvBarItem):void {
            expect(houseArea.id).toEqual(firstItem.id);
            expect(houseArea.text).toEqual(firstItem.text);
        }
        
        const component = render(<SubNavBar items={RenovationPaths} onClick={handleClick}/>);      

        const navListItem = component.getAllByTestId('qa-sub-nav-bar__list-item');
        const navListItemButton = navListItem[0].children[0];
       
        expect(navListItem).toBeTruthy();
        expect(navListItemButton).toBeTruthy();

        fireEvent.click(navListItemButton);
        
        component.unmount();
    });
});