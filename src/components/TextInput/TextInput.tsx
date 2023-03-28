import {Components} from "../../interfaces/Components.d";
import "./TextInput.scss"

export function TextInput(props: Components.TextInput): JSX.Element {
    let inputType: string;
    switch(props.type) {
        case 'primary':
            inputType = 'c-text-input--primary'
            break
        case 'secondary':
            inputType = 'c-text-input--secondary'
            break;
        default:
            inputType = 'c-text-input--primary'
    }
    return (
        <input type="text" data-testid="qa-text-input" className={`c-text-input ${inputType}`} placeholder={props.placeholder} value={props.text} />
    )
}