import { TextAreaDTO } from "../../integration/core/dtos/components/TextArea.dto";
import "./TextArea.scss";

export function TextArea(props: TextAreaDTO): JSX.Element {
    let textAreaType: string;
    switch(props.type) {
        case 'primary':
            textAreaType = 'c-textarea--primary'
            break
        case 'secondary':
            textAreaType = 'c-textarea--secondary'
            break;
        default:
            textAreaType = 'c-textarea--primary'
    }

    return (
        <textarea data-testid="qa-textarea" className={`c-textarea ${textAreaType}`} placeholder={props.placeholder}>{props.text}</textarea>
    )
}