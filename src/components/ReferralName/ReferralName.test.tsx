import {it, describe, expect} from "vitest";
import { render} from '@testing-library/react';
import {ReferralName} from "./ReferralName"

describe('ReferralName component', () => {
    let component: object;
    const testText: string = "Test String";
    it('Component works', () => {
        const {getByTestId, getByText} = render(<ReferralName text={testText}/>);
        component = getByTestId('qa-referral-name');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-referral-name'));
        expect(getByText(testText).textContent).toBe(testText)
    })
});