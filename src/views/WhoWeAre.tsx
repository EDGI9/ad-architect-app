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
    let employee1 = useRef(null);
    let employee2 = useRef(null);
    let employee3 = useRef(null);
    let employeeRefs = [employee1, employee2, employee3];

    if (Object.keys(employees).length > 0) {
        employeeList = Object.values(employees).map((employee: EmployeeDTO, index) => {
            return <div ref={employeeRefs[index]} key={index} className="transition ease-in-out duration-300 opacity-0 -translate-x-10"><EmployeeCard  image={employee.image} title={employee.title}  subtitle={employee.subtitle} text={employee.text} backgroundColor="" ></EmployeeCard></div>
        })
    }

    useEffect(() => {
        employeeRefs.forEach((employee, index) => {
            switch (index) {
                case 1:
                    //@ts-ignore
                    employee.current.classList.add('delay-300');
                    break;
                case 2:
                    //@ts-ignore
                    employee.current.classList.add('delay-500');
                    break;
                case 3:
                    //@ts-ignore
                    employee.current.classList.add('delay-700');
                    break;
            }
            
            //@ts-ignore
            employee.current.classList.remove('opacity-0', '-translate-x-10');
        });
        
        
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