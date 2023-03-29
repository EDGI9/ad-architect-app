import {it, describe, expect} from "vitest";
import { render} from '@testing-library/react';
import {Card} from "./Card"

describe('Card component', () => {
    let component: object;
    const color: string = "#FFF";
    const borderRadius: number = 10;
    const testHtml = <h1>Test html</h1>
    
    it('Component works', () => {
        const {getByTestId} = render(<Card backgroundColor={color} borderRadius={borderRadius}>{testHtml}</Card>);
        component = getByTestId('qa-card');
        
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-card'));
        //Test to see if component renders image
        //Test to see if component renders title
        //Test to see if component renders text
    })
});