import "react-multi-carousel/lib/styles.css";
import "@testing-library/jest-dom"
import "react-multi-carousel";
import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { Services } from "../../integration/services/index";
import { CarrouselBig } from "./CarrouselBig.js";

describe('CarrouselBig component', async () => {
    let component: object;
    //TODO: Replace hardcoded string with an object property fetched from a service    
    const props = {
        slides: await Services.Slider.getByArea('KITCHENS'),
    }

    afterAll(() => {
        cleanup();
    });

    it.skip('Component works', () => {
        const {getByTestId} = render(<CarrouselBig {...props} />);
        component = getByTestId('qa-carrousel-big');
        
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-big'));
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});