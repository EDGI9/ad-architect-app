interface TextArea {
    text: string
}
export function TextArea(props: TextArea): JSX.Element {
    return (
        <textarea data-testid="qa-textarea" className="c-textarea">{props.text}</textarea>
    )
}