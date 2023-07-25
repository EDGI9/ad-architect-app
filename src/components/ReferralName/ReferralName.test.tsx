import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { ReferralName } from "./ReferralName";

describe('ReferralName component', () => {
    let component: object;
    const props = {
        title: "Test Title",
        subtitle: "Test subtitle",
    };

    afterAll(() => {
        cleanup();
    });

    it('Component works', () => {
        const {getByTestId, getByText} = render(<ReferralName {...props}/>);
        component = getByTestId('qa-referral-name');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-referral-name')).toBe(true);
        expect(getByText(props.title).textContent).toBe(props.title)
        expect(getByText(props.subtitle).textContent).toBe(props.subtitle)
    })
});