export function Footer(props: object): JSX.Element {
    return (
        <footer data-testid="qa-footer" className="c-footer">
            
            {
                //@ts-ignore
                props.children
            }
        </footer>
    )
    
}