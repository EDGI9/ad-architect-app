interface TextInput {
    text: string
}
export function TextInput(props: TextInput): JSX.Element {
    return (
        <div data-testid="qa-text-input" className="c-text-input"></div>
    )
}