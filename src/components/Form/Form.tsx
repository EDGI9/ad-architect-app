/* @ts-ignore */
export function Form(props) {
    return (
        <form data-testid="qa-form" className="c-form">
            {props.children}
        </form>
    )
}