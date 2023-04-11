import {it, describe, expect} from "vitest";
import { render, cleanup } from '@testing-library/react';
import {SubNavBar} from "./SubNavBar.js"
import {Components} from "../../interfaces/Components.d";


describe('SubNavBar component', () => {
    let component: object;
    const props: Components.SubNavBar = {
        items: ['Item 1', 'Item 2', 'Item 3']
    };

    afterAll(() => {
        cleanup();
    });

    it('Component works', () => {
        const {getByTestId, getByText} = render(<SubNavBar {...props} />);
        component = getByTestId('qa-sub-nav-bar');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-sub-nav-bar'));
        props.items.forEach((text, index) => {
            expect(getByText(text).textContent).toBe(props.items[index])
        })
    })
});