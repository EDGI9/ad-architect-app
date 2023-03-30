import { CSSProperties } from "react"
import {Components} from "../../interfaces/Components.d";
import "./Card.scss"


export function Card(props: Components.Card): JSX.Element {

    const classList = props.className !== undefined ? props.className : ''
    const style: CSSProperties = {
        backgroundColor: props.backgroundColor !== undefined ? `${props.backgroundColor}` : "#FFF",
        borderRadius: props.borderRadius !== undefined ? props.borderRadius : "auto"
    }

    return (
        <div data-testid="qa-card" className={`c-card ${classList}`} style={style}>
            {
            props.children
            }
        </div>
    ) 
}