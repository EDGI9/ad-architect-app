import { EmployeeDTO } from "../integration/core/dtos/Employee.dto";
import { EmployeeCard } from "../components/EmployeeCard/EmployeeCard";
import { Card } from "../components/Card/Card";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { ContactBlock } from "../components/ContactBlock/ContactBlock";
import { employees } from "../__mock__/employees";
import  "../assets/styles/utilities.scss";

export function WhoWeAre(): JSX.Element{
    let employeeList;

    if (Object.keys(employees).length > 0) {
        employeeList = Object.values(employees).map((employee: EmployeeDTO, index) => {
            return <EmployeeCard image={employee.image} title={employee.title}  subtitle={employee.subtitle} text={employee.text} backgroundColor="" key={index}></EmployeeCard>
        })
    }

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