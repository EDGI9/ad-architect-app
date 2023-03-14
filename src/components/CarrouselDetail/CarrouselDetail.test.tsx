import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {CarrouselDetail} from "./CarrouselDetail.js"
import { slider } from "../../__mock__/slider";

describe('CarrouselDetail component', () => {
    let component: object;
    /* Add Image interface */
    const testImageSource: object = slider[0];
    const testText: object = {title: "Test Title", description: "Test Description"}; // Add CarrouselDetail type globally

    it('Component works', () => {
        const {getByTestId, getByText} = render(<CarrouselDetail image={testImageSource} text={testText} />);
        component = getByTestId('qa-carrousel-detail');
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-detail'));
        //@ts-ignore
        expect(getByText(testText.title).textContent).toBe(testText.title)
        //@ts-ignore
        expect(getByText(testText.description).textContent).toBe(testText.description)
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});