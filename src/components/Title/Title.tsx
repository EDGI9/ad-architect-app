import {Components} from "../../interfaces/components.d";
import "./Title.scss"

export function Title(props: Components.Title): JSX.Element {
    
    if (props.type && props.text) {
        //@ts-ignore
        return <props.type data-testid="qa-title" className="c-title">{props.text}</props.type>
    } else {
        return <h1></h1>
    }
}