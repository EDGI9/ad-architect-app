import { PageTitleDTO } from "../../integration/core/dtos/components/PageTitle.dto";
import "./PageTitle.scss";

export function PageTitle(props: PageTitleDTO): JSX.Element {

    const classList = props.className !== undefined ? props.className : ''
    
    return (
        <h1 data-testid="qa-page-title" className={`c-page-title ${classList}`}>{props.text}</h1>
    )
}