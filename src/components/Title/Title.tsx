import "./Title.scss";

//@ts-ignore
export function Title(props): JSX.Element {

    const classList = props.className !== undefined ? props.className : ''
    
    if (props.type && props.text) {
        //@ts-ignore
        return <props.type data-testid="qa-title" className={`c-title ${classList}`}>{props.text}</props.type>
    } else {
        return <h1></h1>
    }
}