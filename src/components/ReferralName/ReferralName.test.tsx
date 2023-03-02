import {it, describe, beforeEach, afterEach, expect} from "vitest";
import { render} from '@testing-library/react';
import {ReferralName} from "./ReferralName"

describe('ReferralName component', () => {
    let component: object;
    const testText: string = "Test String";
    it('Component works', () => {
        const {getByTestId} = render(<ReferralName text={testText}/>);
        component = getByTestId('qa-referral-name');
        //@ts-ignore
        expect(component.classList.contains('c-referral-name'));
        //Test to see if component renders text
    })
});