import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {Footer} from "./Footer.js"

describe('Footer component', () => {
    let component: object;
    const testHtml = <h1>Test html</h1>
    
    it('Component works', () => {
        const {getByTestId, container} = render(<Footer>{testHtml}</Footer>)
        component = getByTestId('qa-footer');
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-footer')).toBe(true);
        //Test to see if element is rendered inside component
        //expect(component).toContainHTML("<h1>Test html</h1>")
    })
});