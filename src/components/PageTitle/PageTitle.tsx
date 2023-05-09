import "./PageTitle.scss";

//@ts-ignore
export function PageTitle(props): JSX.Element {

    const classList = props.className !== undefined ? props.className : ''
    
    return (
        <h1 data-testid="qa-page-title" className={`c-page-title ${classList}`}>{props.text}</h1>
    )
}