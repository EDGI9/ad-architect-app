import "./EmployeeCard.scss"
import { Image } from "../Image/Image";
import { Card } from "../Card/Card";
import { Title } from "../Title/Title";


interface EmployeeCard {
    image:{
        src: string 
        name: string
    }
    title:string
    text:string
}

export function EmployeeCard(props: EmployeeCard) {
    let image;
    let title; 
    let text;
    
    if (props.image) {
        image = <Image imageData={props.image} height={30} width={30} />
    } 
    if (props.title) {
        title = <Title type="h3" text={props.title} />
    } 
    if (props.text) {
        text = <Title type="h5" text={props.text} />
    } 

    return (
        <div data-testid="qa-employee-card" className="c-employee-card">
            <Card backgroundColor="#FFF" className="c-employee-card" borderRadius={0}>
                <div className="c-employee-card__image">
                    {image}
                </div>
                <div className="c-employee-card__title">
                    {title}
                </div>
                <div className="c-employee-card__text">
                    {text}
                </div>
            </Card>
        </div>
    )
}