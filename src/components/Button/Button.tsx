interface Button {
    text: string
}

export function Button(props: Button): JSX.Element {
    return (
        <button data-testid="qa-button" className="c-button">{props.text}</button>
    ) 
}