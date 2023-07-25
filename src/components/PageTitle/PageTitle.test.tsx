import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { PageTitle } from "./PageTitle";



describe('PageTitle component', () => {
    let component: object;
    const testTitleText: string =  "Test Title"
    const props = {
        text: "Test Text",
        className: "test-class",
    };

    afterAll(() => {
        cleanup();
    });

    it('Component works', () => {
        const {getByTestId, getByText} = render(<PageTitle {...props}/>);
        component = getByTestId('qa-page-title');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-page-title')).toBe(true);
        //@ts-ignore
        expect(component.classList.contains(props.className)).toBe(true);
        expect(getByText(props.text).textContent).toBe(props.text);
    })
});