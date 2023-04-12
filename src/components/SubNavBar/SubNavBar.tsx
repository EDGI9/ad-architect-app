import {Components} from "../../interfaces/Components.d";
import { Button } from "../Button/Button";
import "./SubNavBar.scss"

export function SubNavBar(props: Components.SubNavBar): JSX.Element {
    const checkCurrentActiveNav = (item: string) => {
        if (props.currentNav == undefined || props.currentNav == null) {
            return false
        }
        return props.currentNav == item
    } 
    return (
        <nav data-testid="qa-sub-nav-bar" className="c-sub-nav-bar">
            <ul className="c-sub-nav-bar__list">
                {
                    Object.values(props.items).map((itemTitle, index) => (
                        <li title={itemTitle.text} key={index} className="c-sub-nav-bar__list-item">
                            <Button key={index} text={itemTitle.text} type="secondary" active={checkCurrentActiveNav(itemTitle.text)} onClick={() => props.onClick(itemTitle.text)}></Button>
                        </li>
                    ))
                } 
            </ul>
        </nav>
    )
}