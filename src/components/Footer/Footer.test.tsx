import {it, describe, expect} from "vitest";
import { render, cleanup} from '@testing-library/react';
import {RouterPaths} from "../../router/router-paths";
import {Footer} from "./Footer.js"
import {Components} from "../../interfaces/Components.d";


describe('Footer component', () => {
    let component: object;
    const props: Components.Footer = {
        routes: RouterPaths
    }

    afterAll(() => {
        cleanup();
    });
    
    it.skip('Component works', () => {
        const {getByTestId, container} = render(<Footer {...props}></Footer>)
        component = getByTestId('qa-footer');
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-footer')).toBe(true);
        //Test to see if element is rendered inside component
        //expect(component).toContainHTML("<h1>Test html</h1>")
    })
});