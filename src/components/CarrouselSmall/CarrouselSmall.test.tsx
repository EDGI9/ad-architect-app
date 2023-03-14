import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {CarrouselSmall} from "./CarrouselSmall.js"
import { slider } from "../../__mock__/slider";

describe('CarrouselSmall component', () => {
    let component: object;

    it.skip('Component works', () => {
        const {getByTestId} = render(<CarrouselSmall slides={slider} />);
        component = getByTestId('qa-carrousel-small');
        
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-small'));
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});