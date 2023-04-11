import {it, describe, expect} from "vitest";
import { render, cleanup } from '@testing-library/react';
import {CarrouselSmall} from "./CarrouselSmall.js"
import {Components} from "../../interfaces/Components.d";
import { slider } from "../../__mock__/slider";

describe('CarrouselSmall component', () => {
    let component: object;
    const props: Components.CarrouselSmall = {
        slides: slider,
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