import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { Services } from "../../integration/services/index";
import { CarrouselSmall } from "./CarrouselSmall.js"
import { HouseAreas } from "../../integration/core/constants/HouseAreas.constants";

describe('CarrouselSmall component', async () => {
    let component: object;

    const props = {
        slides: await Services.Slider.getByArea(HouseAreas.KITCHENS.id),
    }

    afterAll(() => {
        cleanup();
    });

    it.skip('Component works', () => {
        const {container} = render(<CarrouselSmall {...props} />);
        component = container.getElementsByClassName('qa-carrousel-small')[0];
        
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-small')).toBe(true);
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});