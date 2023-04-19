import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { SectionBubbleDTO } from "../../integration/core/dtos/SectionBubble.dto";
import { SectionBubble } from "./SectionBubble.js";

describe('SectionBubble component', () => {
    let component: object;
    const props: SectionBubbleDTO = {
        title: 'Test Title',
        text: 'Test Text',
    };

    afterAll(() => {
        cleanup();
    });

    it('Component works', () => {
        const {getByTestId, getByText} = render(<SectionBubble {...props}/>);
        component = getByTestId('qa-section-bubble');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-section-bubble'));
        //@ts-ignore
        expect(component.classList.contains('c-section-bubble--align-left'));
        expect(getByText(props.title).textContent).toBe(props.title)
        expect(getByText(props.text).textContent).toBe(props.text)
    })
});