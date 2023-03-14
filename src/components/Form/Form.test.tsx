import {it, describe, beforeEach, afterEach, expect} from "vitest";
import {fireEvent, render} from '@testing-library/react';
import {Form} from "./Form.js"

describe('Form component', () => {
    let component: object;
    let input: object;
    let textarea: object;

    it('Component works', () => {
        const {getByTestId} = render(<Form />);
        component = getByTestId('qa-form');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-form'));
    })
});