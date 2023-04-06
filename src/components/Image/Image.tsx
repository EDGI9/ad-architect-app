import {Components} from "../../interfaces/Components.d";

export function Image(props: Components.Image): JSX.Element {
    const classList = props.className !== undefined ? props.className : '';
    const imgClassList = props.imgClassName !== undefined ? props.imgClassName : '';
    const width: string = props.width !== undefined ? `${props.width}px` : "auto";
    const height: string = props.height !== undefined ? `${props.height}px` : "auto";

    return (
        <picture data-testid="qa-image" className={`c-image ${classList}`}>
            <source src={props.image.src} height={height} width={width} className={imgClassList}/>
            <img src={props.image.src} alt={props.image.name} height={height} width={width} className={imgClassList}></img>
        </picture>
    )
}