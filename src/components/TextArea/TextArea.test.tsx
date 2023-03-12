import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {TextArea} from "./TextArea"

describe('TextArea component', () => {
    let component: object;
    const testText: string = "Test text";
    it('Component works', () => {
        const {getByTestId} = render(<TextArea text={testText}/>);
        component = getByTestId('qa-textarea');
        //@ts-ignore
        expect(component.classList.contains('c-textarea')).toBe(true);
        //Test to see if text is rendered inside component
    })
});