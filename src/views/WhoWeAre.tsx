import { useEffect, useRef, } from "react";

import { EmployeeDTO } from "../integration/core/dtos/Employee.dto";
import { EmployeeCard } from "../components/EmployeeCard/EmployeeCard";
import { Card } from "../components/Card/Card";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { ContactBlock } from "../components/ContactBlock/ContactBlock";
import { employees } from "../__mock__/employees";
import  "../assets/styles/utilities.scss";

export function WhoWeAre(): JSX.Element{
    let employeeList;
    let employee1 = useRef();
    let employee2 = useRef();
    let employee3 = useRef();
    let employeeRefs = [employee1, employee2, employee3];

    if (Object.keys(employees).length > 0) {
        employeeList = Object.values(employees).map((employee: EmployeeDTO, index) => {
            return <div ref={employeeRefs[index]} key={index} className="transition ease-in-out duration-300 opacity-0"><EmployeeCard  image={employee.image} title={employee.title}  subtitle={employee.subtitle} text={employee.text} backgroundColor="" ></EmployeeCard></div>
        })
    }

    useEffect(() => {
        //@ts-ignore
        employee1.current.classList.add('delay-200');
        //@ts-ignore
        employee2.current.classList.add('delay-300');
        //@ts-ignore
        employee3.current.classList.add('delay-500');
        
        //@ts-ignore
        employee1.current.classList.remove('opacity-0');
        //@ts-ignore
        employee2.current.classList.remove('opacity-0');
        //@ts-ignore
        employee3.current.classList.remove('opacity-0');
    },[])

    return (
        <div className="w-full">
                <section className="flex justify-start my-16">
                    <PageTitle text="Who we are"/>
                </section>
                <section className="flex justify-center my-28 ">
                    <Card backgroundColor="#E1E1E1" className="w-screen flex justify-center items-center md:items-start flex-col md:flex-row md:space-x-12">
                        {employeeList}
                    </Card>
                </section>
                <section className="flex justify-center my-28">
                    <ContactBlock title='Let’s start a conversation!' text='Get in touch for any questions you may have and we’ll work together to find the best solution.'/>
                </section>
        </div>
    )
}