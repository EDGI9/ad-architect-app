import {Components} from "../../interfaces/Components.d";

import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {CarrouselDetail} from "./CarrouselDetail.js"
import { images } from "../../__mock__/images";

describe('CarrouselDetail component', () => {
    let component: object;
    const testData: Components.CarrouselDetail = {
        image: images.big_img_1,
        text: {title: "Test Title", description: "Test Description"}
    } 

    it('Component works', () => {
        const {getByTestId, getByText} = render(<CarrouselDetail image={testData.image} text={testData.text} />);
        component = getByTestId('qa-carrousel-detail');
        
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-detail'));
        //@ts-ignore
        expect(getByText(testData.text.title).textContent).toBe(testData.text.title)
        //@ts-ignore
        expect(getByText(testData.text.description).textContent).toBe(testData.text.description)
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});