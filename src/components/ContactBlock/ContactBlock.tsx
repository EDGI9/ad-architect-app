import { Link } from "react-router-dom";
import { RouterPaths } from "../../router/RouterPaths";
import { Card } from "../Card/Card";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import "./ContactBlock.scss";

//@ts-ignore
export function ContactBlock(props) {
    let title; 
    let text;
    let backgroundColor;
    
    if (props.title !== undefined) {
        title = <Title type="h2" text={props.title} />
    } 
    if (props.text !== undefined) {
        text = <p>{props.text}</p>
    } 
    if (props.backgroundColor !== undefined) {
        backgroundColor = props.backgroundColor
    } 

    return (
        <div data-testid="qa-contact-block" className="c-contact-block">
            <Card backgroundColor={backgroundColor} borderRadius={0}>
                <div className="c-contact-block__text-container">
                    <div className="c-contact-block__title">
                        {title}
                    </div>
                    <div className="c-contact-block__text">
                        {text}
                    </div>
                </div>
                <div className="c-contact-block__button">
                    <Link to={RouterPaths.CONTACT_US.path}>
                        <Button text="Get in touch"></Button>
                    </Link>
                </div>
            </Card>
        </div>
    )
}