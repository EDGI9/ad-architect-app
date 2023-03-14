import { Image } from "../Image/Image";
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
        title = <Title type="h3" text={props.title}/>
    } 
    if (props.text) {
        text = <Title type="h5" text={props.text}/>
    } 

    return (
        <div data-testid="qa-employee-card" className="c-employee-card">
            {image}
            {title}
            {text}
        </div>
    )
}