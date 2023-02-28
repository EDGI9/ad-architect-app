interface Title {
    type: string,
    text: string
}

export function Title(props: Title): JSX.Element {
    
    if (props.type && props.text) {
        return <props.type data-testid="qa-title" className="c-title">{props.text}</props.type>
    } else {
        return <h1></h1>
    }
}