import {it, describe, expect} from "vitest";
import { render, cleanup } from '@testing-library/react';
import {PageTitle} from "./PageTitle"
import {Components} from "../../interfaces/Components.d";


describe('PageTitle component', () => {
    let component: object;
    const testTitleText: string =  "Test Title"
    const props: Components.PageTitle = {
        text: "Test Text",
        className: "test-class",
    };

    afterAll(() => {
        cleanup();
    });

    //TODO: Add more tests to test if class is passed
    it('Component works', () => {
        const {getByTestId, getByText} = render(<PageTitle {...props}/>);
        component = getByTestId('qa-page-title');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-page-title'));
        expect(getByText(props.text).textContent).toBe(props.text);
    })
});