import "./TextArea.scss";

//@ts-ignore
export function TextArea(props): JSX.Element {
    let textAreaType: string;

    //TODO: Move "primary", "secondary", etc. strings to a global opject that can be accessed everywere and be consistent
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
        <textarea data-testid="qa-textarea" className={`c-textarea ${textAreaType}`} placeholder={props.placeholder} defaultValue={props.text}></textarea>
    )
}