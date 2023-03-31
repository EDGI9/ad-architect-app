import {it, describe, expect} from "vitest";
import { render} from '@testing-library/react';
import {PageTitle} from "./PageTitle"

describe('PageTitle component', () => {
    let component: object;
    const testTitleText: string =  "Test Title"
    it('Component works', () => {
        const {getByTestId, getByText} = render(<PageTitle text={testTitleText}/>);
        component = getByTestId('qa-page-title');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-page-title'));
        expect(getByText(testTitleText).textContent).toBe(testTitleText);
    })
});