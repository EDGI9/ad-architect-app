import {Images} from "../../interfaces/Image.d";
import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {EmployeeCard} from "./EmployeeCard"
import { slider } from "../../__mock__/slider";


describe('EmployeeCard component', () => {
    let component: object;
    //TODO: Replace image used with employee image
    const testImageSource: Images.Image = slider[0];
    const testTitle: string = "Test Title";
    const testSubtitleText: string = "Test Subtitle";
    const testText: string = "Test Text";

    it('Component works', () => {
        const {getByTestId} = render(<EmployeeCard image={testImageSource} title={testTitle} subtitle={testSubtitleText} text={testText}/>);
        component = getByTestId('qa-employee-card');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-employee-card'));
        //Test to see if component renders image
        //Test to see if component renders title
        //Test to see if component renders text
    })
});