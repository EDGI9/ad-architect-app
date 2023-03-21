import {Components} from "../../interfaces/components.d";
import { Title } from "../Title/Title";
import "./SectionBubble.scss"

//Replace parent div with Card component
export function SectionBubble(props: Components.SectionBubble) : JSX.Element {
    let alignClass;
    if (props.align !== undefined) {
        alignClass = `c-section-bubble--align-${props.align}`
    } else {
        alignClass = 'c-section-bubble--align-left'
    }
    
    return (
        <div data-testid="qa-section-bubble" className={`c-section-bubble ${alignClass}`}>
            <Title type="h2" text={props.title}></Title>
            <p>
                {props.text}
            </p>
        </div>
    )
    
}