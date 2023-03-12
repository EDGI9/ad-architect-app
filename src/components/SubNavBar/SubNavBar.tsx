interface SubNavBar {
    items: Array<string>
}

export function SubNavBar(props: SubNavBar): JSX.Element {
    return (
        <nav data-testid="qa-sub-nav-bar" className="c-sub-nav-bar">
            <ul>
                {
                    Object.values(props.items).map((itemTitle, index) => (
                        <li title={itemTitle} key={index}>
                            {itemTitle}
                        </li>
                    ))
                } 
            </ul>
        </nav>
    )
}