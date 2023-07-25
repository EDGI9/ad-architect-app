import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { SectionBubble } from "./SectionBubble.js";

describe('SectionBubble component', () => {
    let component: object;
    const props = {
        title: 'Test Title',
        text: 'Test Text',
        className: 'test-class'
    };

    afterAll(() => {
        cleanup();
    });

    it('Component works', () => {
        const {getByTestId, getByText, rerender} = render(<SectionBubble {...props}/>);
        component = getByTestId('qa-section-bubble');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-section-bubble')).toBe(true);
        //@ts-ignore
        expect(component.classList.contains('c-section-bubble--align-left')).toBe(true);
        //@ts-ignore
        expect(component.classList.contains(props.className)).toBe(true);
        
        expect(getByText(props.title).textContent).toBe(props.title)
        expect(getByText(props.text).textContent).toBe(props.text)

        rerender(<SectionBubble {...props} align="left" />)
    })
});