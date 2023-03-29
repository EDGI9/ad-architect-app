import {Components} from "../../interfaces/Components.d";
import { Image } from "../Image/Image";
import { Card } from "../Card/Card";
import { Title } from "../Title/Title";
import "./EmployeeCard.scss"




export function EmployeeCard(props: Components.EmployeeCard) {
    let image;
    let title; 
    let subtitle; 
    let text;
    
    if (props.image) {
        image = <Image image={props.image} height={200} width={200} />
    } 
    if (props.title) {
        title = <Title type="h3" text={props.title} />
    } 
    if (props.title) {
        subtitle = <Title type="h4" text={props.subtitle} />
    } 
    if (props.text) {
        text = <Title type="h5" text={props.text} />
    } 

    return (
        <div data-testid="qa-employee-card" className="c-employee-card">
            <Card backgroundColor="#FFF" borderRadius={0}>
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