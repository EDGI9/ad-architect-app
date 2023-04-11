import {it, describe, expect} from "vitest";
import { render, cleanup } from '@testing-library/react';
import {CarrouselDetail} from "./CarrouselDetail.js"
import {Components} from "../../interfaces/Components.d";
import { images } from "../../__mock__/images";

describe('CarrouselDetail component', () => {
    let component: object;
    const props: Components.CarrouselDetail = {
        image: images.big_img_1,
        text: {title: "Test Title", description: "Test Description"}
    }

    afterAll(() => {
        cleanup();
    });

    it('Component works', () => {
        const {getByTestId, getByText} = render(<CarrouselDetail {...props} />);
        component = getByTestId('qa-carrousel-detail');
        
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-detail'));
        //@ts-ignore
        expect(getByText(props.text.title).textContent).toBe(props.text.title)
        //@ts-ignore
        expect(getByText(props.text.description).textContent).toBe(props.text.description)
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});