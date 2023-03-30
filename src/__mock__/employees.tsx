import {Employees} from "../interfaces/Employees.d";
import {images} from "./images"

export const employees: Employees.EmployeesList = {
    "employee_1" : {
        image: images.employee_1,
        title: "Sergio Lopez",
        subtitle: "Interior designer",
        text: "Sergio has 10 years experince as an Interior Designer, having worked in many different projects. He especially likes working on remodels of lake houses.",
    },
    "employee_2" : {
        image: images.employee_2,
        title: "Ananda Ntombi",
        subtitle: "Architect",
        text: "Ananda has started her carreer working at  Foster and Partners, where she had the opportunity to learn from some of the best in the industry and experience varied projects and teams.",
    },
    "employee_3" : {
        image: images.employee_3,
        title: "Larry Chester",
        subtitle: "Architectural Engineer",
        text: "Larry is the go to person to bring to life the ideas and concepts dreamed by the team, coming up with creative ideas to transform those concepts. ",
    }
}