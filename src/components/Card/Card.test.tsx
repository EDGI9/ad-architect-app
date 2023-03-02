import {it, describe, beforeEach, afterEach, expect} from "vitest";
import {fireEvent, render} from '@testing-library/react';
import {Card} from "./Card"

describe('Card component', () => {
    let component: object;
    const color: string = "Test Title";
    const borderRadius: number = 10;
    
    it('Component works', () => {
        const {getByTestId} = render(<Card color={color} borderRadius={borderRadius}/>);
        component = getByTestId('qa-card');
        //@ts-ignore
        expect(component.classList.contains('c-card'));
        //Test to see if component renders image
        //Test to see if component renders title
        //Test to see if component renders text
    })
});