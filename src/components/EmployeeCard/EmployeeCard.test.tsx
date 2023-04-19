import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { EmployeeCard} from "./EmployeeCard";
import { EmployeeCardDTO } from "../../integration/core/dtos/EmployeeCard.dto";
import { slider } from "../../__mock__/slider";



describe('EmployeeCard component', () => {
    let component: object;
    //TODO: Replace image used with employee image
    const props: EmployeeCardDTO = {
        image: slider[0],
        title: "Test Title",
        subtitle: "Test Subtitle",
        text: "Test Text"
    }

    afterAll(() => {
        cleanup();
    });

    it('Component works', () => {
        const {getByTestId} = render(<EmployeeCard {...props}/>);
        component = getByTestId('qa-employee-card');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-employee-card'));
        //Test to see if component renders image
        //Test to see if component renders title
        //Test to see if component renders text
    })
});