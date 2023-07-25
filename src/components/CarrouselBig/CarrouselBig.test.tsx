import "react-multi-carousel/lib/styles.css";
import "@testing-library/jest-dom"
import "react-multi-carousel";
import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { Services } from "../../integration/services/index";
import { CarrouselBig } from "./CarrouselBig.js";
import { HouseAreas } from "../../integration/core/constants/HouseAreas.constants";

describe('CarrouselBig component', async () => {
    let component: object;
    // let slide;

    const props = {
        slides: await Services.Slider.getByArea(HouseAreas.KITCHENS.id),
    }

    afterAll(() => {
        cleanup();
    });

    it.skip('Component works', () => {
        const {container} = render(<CarrouselBig {...props} />);
        component = container.getElementsByClassName('qa-carrousel-big')[0];
        // slide = container.getElementsByClassName('qa-carrousel-big__slide-item')[0];
        
        expect(component).not.toBeNull();
        
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-big')).toBe(true);
        /* console.log(slide);
        expect(slide).toContainElement('source')
        expect(slide).toContainElement('img')
         */
    })
});