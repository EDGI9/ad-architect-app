import { CSSProperties } from "react"
import "./Card.scss"

//@ts-ignore
export function Card(props): JSX.Element {

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