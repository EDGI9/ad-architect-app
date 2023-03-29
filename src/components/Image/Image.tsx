import {Components} from "../../interfaces/Components.d";

export function Image(props: Components.Image): JSX.Element {
    const width: string = props.width !== undefined ? `${props.width}px` : "auto";
    const height: string = props.height !== undefined ? `${props.height}px` : "auto";

    return (
        <picture data-testid="qa-image" className="c-image">
            <source src={props.image.src} height={height} width={width}/>
            <img src={props.image.src} alt={props.image.name} height={height} width={width}></img>
        </picture>
    )
}