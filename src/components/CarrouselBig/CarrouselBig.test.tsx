import "react-multi-carousel/lib/styles.css";
import "@testing-library/jest-dom"
import "react-multi-carousel";
import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { CarrouselBig } from "./CarrouselBig.js";
import { CarrouselBigDTO } from "../../integration/core/dtos/CarrouselBig.dto";
import { slider } from "../../__mock__/slider";

describe('CarrouselBig component', () => {
    let component: object;
    const props: CarrouselBigDTO = {
        slides: slider,
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