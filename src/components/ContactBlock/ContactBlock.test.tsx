import {it, describe, expect} from "vitest";
import { render, cleanup } from '@testing-library/react';
import { ContactBlock } from "./ContactBlock";
import { ContactBlockDTO } from "../../integration/core/dtos/ContactBlock.dto";



describe('ContactBlock component', () => {
    let component: object;
    const props: ContactBlockDTO = {
        title: "Test Title",
        text: "Test Text",
        backgroundColor: "#FFF"
    }

    afterAll(() => {
        cleanup();
    });

    //TODO: Add test to test color prop
    it('Component works', () => {
        const {getByTestId} = render(<ContactBlock {...props}/>);
        component = getByTestId('qa-contact-block');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-contact-block'));
        //Test to see if component renders title
        //Test to see if component renders text
    })
});