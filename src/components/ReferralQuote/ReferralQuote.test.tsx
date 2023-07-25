import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { ReferralQuote } from "./ReferralQuote";


describe('ReferralQuote component', () => {
    let component: object;
    const props = {
        text: "Test Text",
    };

    afterAll(() => {
        cleanup();
    });

    it('Component works', () => {
        const {getByTestId, getByText} = render(<ReferralQuote {...props}/>);
        component = getByTestId('qa-referral-quote');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-referral-quote')).toBe(true);
        expect(getByText(props.text).textContent).toBe(props.text)
    })
});