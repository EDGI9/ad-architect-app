import {Images} from "../../interfaces/Image.d";
import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {ContactBlock} from "./ContactBlock"


describe('ContactBlock component', () => {
    let component: object;
    const testTitle: string = "Test Title";
    const testText: string = "Test Text";

    it('Component works', () => {
        const {getByTestId} = render(<ContactBlock title={testTitle} text={testText}/>);
        component = getByTestId('qa-contact-block');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-contact-block'));
        //Test to see if component renders title
        //Test to see if component renders text
    })
});