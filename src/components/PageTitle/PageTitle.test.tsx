import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { PageTitleDTO } from "../../integration/core/dtos/components/PageTitle.dto";
import { PageTitle } from "./PageTitle";



describe('PageTitle component', () => {
    let component: object;
    const testTitleText: string =  "Test Title"
    const props: PageTitleDTO = {
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