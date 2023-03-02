interface Image {
    src: string,
    height: number,
    width: number
}

export function Image(props:Image): JSX.Element {
    const width: string = `${props.width}px` || "100px";
    const height: string = `${props.height}px` || "100px";
    const style: string = `width: ${width}; height:${height}`;
{/* <picture data-testid="qa-image" className="c-image" style={style}>
            <source src={props.src} />
            <img src={props.src}></img>
        </picture> */}
    // return <img data-testid="qa-image" className="c-image" src={props.src}></img>
    return (
        <picture data-testid="qa-image" className="c-image">
            <source src={props.src} />
            <img src={props.src}></img>
        </picture>
    )
}