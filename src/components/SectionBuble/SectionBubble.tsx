import "./SectionBubble.scss"
import { Title } from "../Title/Title";

interface SectionBubble {
    title: string
    text: string,
    align: string
}

//Replace parent div with Card component
export function SectionBubble(props: SectionBubble) : JSX.Element {
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