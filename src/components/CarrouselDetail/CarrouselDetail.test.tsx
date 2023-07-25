import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { Services } from "../../integration/services/index";
import { CarrouselDetail } from "./CarrouselDetail.js";

const images = await Services.Images.getAllImages();

describe('CarrouselDetail component', () => {
    let component: object;
    const props = {
        image: images.BIG_IMG_1,
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
        expect(component.classList.contains('c-carrousel-detail')).toBe(true);
        //@ts-ignore
        expect(getByText(props.text.title).textContent).toBe(props.text.title)
        //@ts-ignore
        expect(getByText(props.text.description).textContent).toBe(props.text.description)
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});