import { EmployeeCardDTO } from "../../integration/core/dtos/EmployeeCard.dto";
import { Image } from "../Image/Image";
import { Card } from "../Card/Card";
import { Title } from "../Title/Title";
import "./EmployeeCard.scss";




export function EmployeeCard(props: EmployeeCardDTO) {
    let image;
    let title; 
    let subtitle; 
    let text;
    let backgroundColor;
    
    if (props.image !== undefined) {
        image = <Image image={props.image} height={200} width={200} />
    } 
    if (props.title !== undefined) {
        title = <Title type="h3" text={props.title} />
    } 
    if (props.title !== undefined) {
        subtitle = <Title type="h4" text={props.subtitle} />
    } 
    if (props.text !== undefined) {
        text = <p>{props.text}</p>
    } 
    if (props.backgroundColor !== undefined) {
        backgroundColor = props.backgroundColor
    } 

    return (
        <div data-testid="qa-employee-card" className="c-employee-card">
            <Card backgroundColor={backgroundColor} borderRadius={0}>
                <div className="c-employee-card__image">
                    {image}
                </div>
                <div className="c-employee-card__title">
                    {title}
                </div>
                <div className="c-employee-card__subtitle">
                    {subtitle}
                </div>
                <div className="c-employee-card__text">
                    {text}
                </div>
            </Card>
        </div>
    )
}