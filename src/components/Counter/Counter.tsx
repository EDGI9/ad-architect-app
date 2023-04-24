import { CounterDTO } from "../../integration/core/dtos/components/Counter.dto";
import "./Counter.scss";

export function Counter(props: CounterDTO): JSX.Element {
    let buttonType: string;
    const classList = props.className !== undefined ? props.className : '';

    //TODO: Move "primary", "secondary", etc. strings to a global opject that can be accessed everywere and be consistent
    switch(props.type) {
        case 'primary':
            buttonType = 'c-counter--primary'
            break
        case 'secondary':
            buttonType = 'c-counter--secondary'
            break;
        default:
            buttonType = 'c-counter--primary'
    }
    return (
        <div data-testid="qa-counter" className={`c-counter ${buttonType} ${classList}`}>
            <span className="c-counter__number">
            {(props.number < 10 ? '0' : '') + (props.number)}.
            </span>
        </div>
    ) 
}