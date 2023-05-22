import { Title } from "../Title/Title";
import "./SectionBubble.scss";

//@ts-ignore
//TODO: Replace parent div with Card component
export function SectionBubble(props) : JSX.Element {
    let alignClass;
    const classList = props.className !== undefined ? props.className : ''
    if (props.align !== undefined) {
        alignClass = `c-section-bubble--align-${props.align}`
    } else {
        alignClass = 'c-section-bubble--align-left'
    }
    
    return (
        <div data-testid="qa-section-bubble" className={`c-section-bubble ${alignClass} ${classList}`}>
            <Title type="h2" text={props.title} className="c-section-bubble__title "></Title>
            <p>
                {props.text}
            </p>
        </div>
    )
    
}