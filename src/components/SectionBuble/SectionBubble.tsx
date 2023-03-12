interface SectionBubble {
    title: string
    text: string
}

export function SectionBubble(props: SectionBubble) : JSX.Element {
    return (
        <div data-testid="qa-section-bubble" className="c-section-bubble">
            <h2>
                {props.title}
            </h2>
            <p>
                {props.text}
            </p>
        </div>
    )
    
}