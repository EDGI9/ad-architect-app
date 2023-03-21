import { CSSProperties } from "react"
import {Components} from "../../interfaces/components.d";
import "./Card.scss"


export function Card(props: Components.Card): JSX.Element {

    const style: CSSProperties = {
        backgroundColor: props.backgroundColor ? `${props.backgroundColor}` : "#FFF",
        borderRadius: props.borderRadius ? props.borderRadius : "auto"
    }

    return (
        <div data-testid="qa-card" className="c-card" style={style}>
            {
            props.children
            }
        </div>
    ) 
}