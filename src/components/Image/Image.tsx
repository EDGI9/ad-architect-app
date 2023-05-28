//@ts-ignore
export function Image(props): JSX.Element {
    const classList = props.className !== undefined ? props.className : '';
    const imgClassList = props.imgClassName !== undefined ? props.imgClassName : '';
    const width: string = props.width !== undefined ? `${props.width}px` : "auto";
    const height: string = props.height !== undefined ? `${props.height}px` : "auto";

    if (!props.image?.src) {
        return <></>
    }

    
    function imageClick() {
        if (!props.onClick) {
            return
        }
        
        props.onClick(props.image)
    }
    

    return (
        <picture data-testid="qa-image" className={`c-image ${classList}`} onClick={imageClick}>
            <source srcSet={props.image.src} height={height} width={width} className={imgClassList}/>
            <img src={props.image.src} alt={props.image.name} height={height} width={width} className={imgClassList} loading="lazy"></img>
        </picture>
    )
}