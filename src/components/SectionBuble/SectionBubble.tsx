import { SectionBubbleDTO } from "../../integration/core/dtos/components/SectionBubble.dto";
import { Title } from "../Title/Title";
import "./SectionBubble.scss";

//TODO: Replace parent div with Card component
export function SectionBubble(props: SectionBubbleDTO) : JSX.Element {
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