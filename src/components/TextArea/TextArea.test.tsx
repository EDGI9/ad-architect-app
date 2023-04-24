import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { TextAreaDTO } from "../../integration/core/dtos/components/TextArea.dto";
import { TextArea } from "./TextArea";


describe('TextArea component', () => {
    let component: object;
    const props: TextAreaDTO = {
        text: "Test Text",
        type: "secondary",
        placeholder: "Test Placeholder",
    };

    afterAll(() => {
        cleanup();
    });
   
    //TODO: Add more tests to test type and placeholder props
    it('Component works', async  () => {
        const {getByTestId} = render(<TextArea {...props}/>);
        component = getByTestId('qa-textarea');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-textarea')).toBe(true);
        //@ts-ignore
        expect(component.classList.contains('c-textarea--secondary')).toBe(true);
        //@ts-ignore
        expect(component.value).toBe(props.text);
    })
});