import {it, describe, expect} from "vitest";
import { render} from '@testing-library/react';
import {CarrouselBig} from "./CarrouselBig.js"
import { slider } from "../../__mock__/slider";

describe('CarrouselBig component', () => {
    let component: object;

    it.skip('Component works', () => {
        const {getByTestId} = render(<CarrouselBig slides={slider} />);
        component = getByTestId('qa-carrousel-big');
        
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-big'));
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});