import {it, describe, beforeEach, afterEach, expect} from "vitest";
import {fireEvent, render} from '@testing-library/react';
import {EmployeeCard} from "./EmployeeCard"

describe('EmployeeCard component', () => {
    let component: object;
    const testImageSource: string = "testImage.jpg";
    const testTitle: string = "Test Title";
    const testText: string = "Test Text";

    it('Component works', () => {
        const {getByTestId} = render(<EmployeeCard image={testImageSource} title={testTitle} text={testText}/>);
        component = getByTestId('qa-employee-card');
        //@ts-ignore
        expect(component.classList.contains('c-employee-card'));
        //Test to see if component renders image
        //Test to see if component renders title
        //Test to see if component renders text
    })
});