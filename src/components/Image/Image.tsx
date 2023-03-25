import {Components} from "../../interfaces/components.d";

export function Image(props: Components.Image): JSX.Element {
    const width: string = props.width !== undefined ? `${props.width}px` : "auto";
    const height: string = props.height !== undefined ? `${props.height}px` : "auto";

    return (
        <picture data-testid="qa-image" className="c-image">
            <source src={props.imageData.src} height={height} width={width}/>
            <img src={props.imageData.src} alt={props.imageData.name} height={height} width={width}></img>
        </picture>
    )
}