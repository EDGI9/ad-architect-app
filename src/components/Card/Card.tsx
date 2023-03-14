interface Card {
    color: string
    borderRadius: number
}

export function Card(props: Card) {
    const style = {
        color: props.color ? `#${props.color}` : "#000",
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