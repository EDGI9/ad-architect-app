import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {ReferralQuote} from "./ReferralQuote"

describe('ReferralQuote component', () => {
    let component: object;
    const testText: string = "Test String";
    it('Component works', () => {
        const {getByTestId, getByText} = render(<ReferralQuote text={testText}/>);
        component = getByTestId('qa-referral-quote');
        //@ts-ignore
        expect(component.classList.contains('c-referral-quote'));
        expect(getByText(testText).textContent).toBe(testText)
    })
});