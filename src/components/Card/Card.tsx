import { CSSProperties } from "react"
import {Components} from "../../interfaces/components.d";
import "./Card.scss"


export function Card(props: Components.Card): JSX.Element {

    const style: CSSProperties = {
        backgroundColor: props.backgroundColor !== undefined ? `${props.backgroundColor}` : "#FFF",
        borderRadius: props.borderRadius !== undefined ? props.borderRadius : "auto"
    }

    return (
        <div data-testid="qa-card" className={`c-card ${props.className}`} style={style}>
            {
            props.children
            }
        </div>
    ) 
}