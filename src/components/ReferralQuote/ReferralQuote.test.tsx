import {it, describe, expect} from "vitest";
import { render, cleanup } from '@testing-library/react';
import {ReferralQuote} from "./ReferralQuote"
import {Components} from "../../interfaces/Components.d";

describe('ReferralQuote component', () => {
    let component: object;
    const props: Components.ReferralQuote = {
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
        expect(component.classList.contains('c-referral-quote'));
        expect(getByText(props.text).textContent).toBe(props.text)
    })
});