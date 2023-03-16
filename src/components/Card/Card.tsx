import "./Card.scss"
interface Card {
    backgroundColor?: string
    borderRadius?: number
}

export function Card(props: Card) {
    console.log(props);
    
    const style = {
        backgroundColor: props.backgroundColor ? `${props.backgroundColor}` : "#FFF",
        borderRadius: props.borderRadius ? props.borderRadius : "auto"
    }

    return (
        <div data-testid="qa-card" className="c-card" style={style}>
            {
            //@ts-ignore
            props.children
            }
        </div>
    ) 
}