import {Components} from "../../interfaces/Components.d";
import "./Button.scss"

export function Button(props: Components.Button): JSX.Element {
    let buttonType: string;
    let isRound: string = props.round !== undefined ? 'c-button--round' : '';
    let isSmall: string = props.small !== undefined ? 'c-button--small' : '';
    switch(props.type) {
        case 'primary':
            buttonType = 'c-button--primary'
            break
        case 'secondary':
            buttonType = 'c-button--secondary'
            break;
        case 'terceary':
            buttonType = 'c-button--terceary'
            break;
        default:
            buttonType = 'c-button--primary'
    }
    return (
        <button data-testid="qa-button" className={`c-button ${buttonType} ${isRound} ${isSmall}`} onClick={props.onClick}>{props.text}</button>
    ) 
}