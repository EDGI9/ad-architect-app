import { Title } from "../components/Title/Title";
import { EmployeeCard } from "../components/EmployeeCard/EmployeeCard";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { PageTitle } from "../components/PageTitle/PageTitle";
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
                    <PageTitle text="Who we are"/>
                </section>
                <section className="flex justify-center my-28 ">
                    <Card backgroundColor="#E1E1E1" className="w-screen flex justify-center items-center md:items-start flex-col md:flex-row md:space-x-12">
                        {employeeList}
                    </Card>
                </section>
                <section className="flex justify-center my-28">
                    <div className="flex justify-center items-start flex-col md:flex-row md:space-x-12 mx-16 md:mx-0">
                        <div className="w-full md:w-3/5 mb-5 md:mb-0">
                            <Title type="h2" text="Let’s start a conversation!" className="font-bold text-xl md:text-3xl text-center md:text-left"></Title>
                            <p className="text-center md:text-left">Get in touch for any questions you may have and we’ll work together to find the best solution.</p>
                        </div>
                        <Button text="Get in touch" className="w-full md:w-auto" ></Button>
                    </div>
                </section>
        </div>
    )
}