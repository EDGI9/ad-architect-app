import {Components} from "../../interfaces/Components.d";
import { Button } from "../Button/Button";
import "./SubNavBar.scss"

export function SubNavBar(props: Components.SubNavBar): JSX.Element {
    return (
        <nav data-testid="qa-sub-nav-bar" className="c-sub-nav-bar">
            <ul className="c-sub-nav-bar__list">
                {
                    Object.values(props.items).map((itemTitle, index) => (
                        <li title={itemTitle} key={index} className="c-sub-nav-bar__list-item">
                            <Button text={itemTitle} type="secondary"></Button>
                        </li>
                    ))
                } 
            </ul>
        </nav>
    )
}