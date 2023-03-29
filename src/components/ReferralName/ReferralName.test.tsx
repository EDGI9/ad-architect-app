import {Components} from "../../interfaces/Components.d";
import {it, describe, expect} from "vitest";
import { render} from '@testing-library/react';
import {ReferralName} from "./ReferralName"

describe('ReferralName component', () => {
    let component: object;
    const testTitleText: string =  "Test Title"
    const testSubTitle: string = "Test Subtitle"
    it('Component works', () => {
        const {getByTestId, getByText} = render(<ReferralName title={testTitleText} subtitle={testSubTitle}/>);
        component = getByTestId('qa-referral-name');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-referral-name'));
        expect(getByText(testTitleText).textContent).toBe(testTitleText)
        expect(getByText(testSubTitle).textContent).toBe(testSubTitle)
    })
});