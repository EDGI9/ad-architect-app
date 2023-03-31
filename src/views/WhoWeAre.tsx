import { Title } from "../components/Title/Title";
import { EmployeeCard } from "../components/EmployeeCard/EmployeeCard";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { employees } from "../__mock__/employees";
import  "../assets/styles/utilities.scss";

export function WhoWeAre(): JSX.Element{
    let employeeList;

    if (Object.keys(employees).length > 0) {
        employeeList = Object.values(employees).map((employee, index) => {
            return <EmployeeCard image={employee.image} title={employee.title}  subtitle={employee.subtitle} text={employee.text} backgroundColor="" key={index}></EmployeeCard>
        })
    }

    return (
        <div className="w-full">
                <section className="flex justify-start my-16">
                    <Title type="h1" text="Who we are" className="text-8xl md:text-9xl u-text-lightest-gray"></Title>
                </section>
                <section className="flex justify-center my-28 ">
                    <Card backgroundColor="#E1E1E1" className="w-screen flex justify-center items-center md:items-top flex-col md:flex-row md:space-x-12">
                        {employeeList}
                    </Card>
                </section>
                <section className="flex justify-center my-28">
                    <div className="flex justify-center items-start flex-col md:flex-row md:space-x-12 mx-16 md:mx-0">
                        <div className="w-full md:w-3/5 mb-5 md:mb-0">
                            <Title type="h2" text="Let’s start a conversation!"></Title>
                            <Title type="h6" text="Get in touch for any questions you may have and we’ll work together to find the best solution."></Title>
                        </div>
                        <Button text="Get in touch" className="w-full md:w-auto" ></Button>
                    </div>
                </section>
        </div>
    )
}