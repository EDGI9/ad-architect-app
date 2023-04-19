import { EmployeeListDTO } from "../integration/core/dtos/EmployeeList.dto";
import { images } from "./images";

export const employees: EmployeeListDTO = {
    EMPLOYEE_1 : {
        image: images.EMPLOYEE_1,
        title: "Sergio Lopez",
        subtitle: "Interior designer",
        text: "Sergio has 10 years experince as an Interior Designer, having worked in many different projects. He especially likes working on remodels of lake houses.",
    },
    EMPLOYEE_2 : {
        image: images.EMPLOYEE_2,
        title: "Ananda Ntombi",
        subtitle: "Architect",
        text: "Ananda has started her carreer working at  Foster and Partners, where she had the opportunity to learn from some of the best in the industry and experience varied projects and teams.",
    },
    EMPLOYEE_3 : {
        image: images.EMPLOYEE_3,
        title: "Larry Chester",
        subtitle: "Architectural Engineer",
        text: "Larry is the go to person to bring to life the ideas and concepts dreamed by the team, coming up with creative ideas to transform those concepts. ",
    }
}