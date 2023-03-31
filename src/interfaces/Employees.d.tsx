import {Images} from "./Image.d";

export namespace Employees {

    export interface Employee {
        image: Images.Image
        title: string
        subtitle: string
        text: string
    }

    export interface EmployeesList {
        [key: string] : Employee
    }
}