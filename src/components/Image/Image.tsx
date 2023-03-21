interface Image {
    imageData: {
        src: string
        name: string
    },
    height: number,
    width: number
}

export function Image(props:Image): JSX.Element {
    const width: string = `${props.width}px` || "100px";
    const height: string = `${props.height}px` || "100px";

    return (
        <picture data-testid="qa-image" className="c-image">
            <source src={props.imageData.src}/>
            <img src={props.imageData.src} alt={props.imageData.name}></img>
        </picture>
    )
}