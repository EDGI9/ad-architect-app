import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {SubNavBar} from "./SubNavBar.js"

describe('SubNavBar component', () => {
    let component: object;
    const testItems: Array<string> = ['Item 1', 'Item 2', 'Item 3'];

    it('Component works', () => {
        const {getByTestId, getByText} = render(<SubNavBar items={testItems} />);
        component = getByTestId('qa-sub-nav-bar');
        //@ts-ignore
        expect(component.classList.contains('c-sub-nav-bar'));
        testItems.forEach((text, index) => {
            expect(getByText(text).textContent).toBe(testItems[index])
        })
    })
});