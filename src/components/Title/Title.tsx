import {Components} from "../../interfaces/Components.d";
import "./Title.scss"

export function Title(props: Components.Title): JSX.Element {

    const classList = props.className !== undefined ? props.className : ''
    
    if (props.type && props.text) {
        //@ts-ignore
        return <props.type data-testid="qa-title" className={`c-title ${classList}`}>{props.text}</props.type>
    } else {
        return <h1></h1>
    }
}