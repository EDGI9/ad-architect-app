import {Components} from "../../interfaces/components.d";
import "./Button.scss"

export function Button(props: Components.Button): JSX.Element {
    let buttonType: string;
    switch(props.type) {
        case 'primary':
            buttonType = 'c-button--primary'
            break
        case 'secondary':
            buttonType = 'c-button--secondary'
            break;
        default:
            buttonType = 'c-button--primary'
    }
    return (
        <button data-testid="qa-button" className={`c-button ${buttonType}`}>{props.text}</button>
    ) 
}