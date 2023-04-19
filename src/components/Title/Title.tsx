import { TitleDTO } from "../../integration/core/dtos/Title.dto";
import "./Title.scss";

export function Title(props: TitleDTO): JSX.Element {

    const classList = props.className !== undefined ? props.className : ''
    
    if (props.type && props.text) {
        //@ts-ignore
        return <props.type data-testid="qa-title" className={`c-title ${classList}`}>{props.text}</props.type>
    } else {
        return <h1></h1>
    }
}