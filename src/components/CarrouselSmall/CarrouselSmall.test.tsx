import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {CarrouselSmall} from "./CarrouselSmall.js"
import { slider } from "../../__mock__/slider";

describe('CarrouselSmall component', () => {
    let component: object;
    const testImageSource: string = "testImage.jpg";

    it.skip('Component works', () => {
        const {getByTestId} = render(<CarrouselSmall slides={slider} />);
        component = getByTestId('qa-carrousel-small');
        //@ts-ignore
        expect(component.classList.contains('c-carrousel-small'));
        /* console.log(container);
        expect(container).toContainElement('source')
        expect(container).toContainElement('img') */
        
    })
});