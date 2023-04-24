import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { Card } from "./Card";
import { CardDTO } from "../../integration/core/dtos/components/Card.dto";


describe('Card component', () => {
    let component: object;
    const props: CardDTO = {
        backgroundColor: "#FFF",
        borderRadius: 10,
        className: "test-class",
        children: <h1>Test html</h1>
    }

    afterAll(() => {
        cleanup();
    });
    
    it('Component works', () => {
        // const {getByTestId} = render(<Card {...props}>{testHtml}</Card>);
        const {getByTestId} = render(<Card {...props} />);
        component = getByTestId('qa-card');
        
        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-card'));
        //Test to see if component renders image
        //Test to see if component renders title
        //Test to see if component renders text
    })
});