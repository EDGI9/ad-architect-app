import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { Services } from "../../integration/services/index";
import { CarrouselSmall } from "./CarrouselSmall.js"

describe('CarrouselSmall component', async () => {
    let component: object;
    //TODO: Replace hardcoded string with an object property fetched from a service    
    const props = {
        slides: await Services.Slider.getByArea('KITCHENS'),
    }

    afterAll(() => {
        cleanup();
    });

    it.skip('Component works', () => {
        const {getByTestId} = render(<CarrouselSmall {...props} />);
        component = getByTestId('qa-carrousel-small');
        
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-small'));
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});