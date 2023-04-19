import { it, describe, expect } from "vitest";
import { render, cleanup} from '@testing-library/react';
import { Form } from "./Form.js";

describe('Form component', () => {
    let component: object;

    afterAll(() => {
        cleanup();
    });

    it('Component works', () => {
        const {getByTestId} = render(<Form />);
        component = getByTestId('qa-form');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-form'));
    })
});