import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {SectionBubble} from "./SectionBubble.js"

describe('SectionBubble component', () => {
    let component: object;
    const testTitle: string = "Test Title";
    const testText: string = "Test Text";

    it('Component works', () => {
        const {getByTestId, getByText} = render(<SectionBubble title={testTitle} text={testText}/>);
        component = getByTestId('qa-section-bubble');
        //@ts-ignore
        expect(component.classList.contains('c-section-bubble'));
        expect(getByText(testTitle).textContent).toBe(testTitle)
        expect(getByText(testText).textContent).toBe(testText)
    })
});