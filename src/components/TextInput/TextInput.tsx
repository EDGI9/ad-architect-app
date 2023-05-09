import "./TextInput.scss";

//@ts-ignore
export function TextInput(props): JSX.Element {
    let inputType: string;

    //TODO: Move "primary", "secondary", etc. strings to a global opject that can be accessed everywere and be consistent
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