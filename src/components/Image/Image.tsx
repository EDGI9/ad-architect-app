import { CSSProperties } from "react";

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
        <picture data-testid="qa-image">
            <source src={props.imageData.src} height={height} width={width}/>
            <img src={props.imageData.src} alt={props.imageData.name} height={height} width={width}></img>
        </picture>
    )
}