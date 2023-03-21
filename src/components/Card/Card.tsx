import { CSSProperties, ReactNode } from "react"
import "./Card.scss"
interface Card {
    backgroundColor?: string
    borderRadius?: number
    children: ReactNode
}

export function Card(props: Card): JSX.Element {

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