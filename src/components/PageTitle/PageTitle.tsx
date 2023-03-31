import {Components} from "../../interfaces/Components.d";
import "./PageTitle.scss"

export function PageTitle(props: Components.PageTitle): JSX.Element {

    const classList = props.className !== undefined ? props.className : ''
    
    return (
        <h1 data-testid="qa-page-title" className={`c-page-title ${classList}`}>{props.text}</h1>
    )
}