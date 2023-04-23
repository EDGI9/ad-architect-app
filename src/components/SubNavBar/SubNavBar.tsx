import { useEffect, useState } from "react";
import { SubNavBarDTO } from "../../integration/core/dtos/components/SubNavBar.dto";
import { SubNavBarItemDTO } from "../../integration/core/dtos/SubNavBarItem.dto";
import { Button } from "../Button/Button";
import "./SubNavBar.scss"

export function SubNavBar(props: SubNavBarDTO): JSX.Element {

    const {items, activeItem, onClick} = props;
    const [currentAtiveId, setCurrentAtiveId]  = useState('');
    let listItems = [];

    function itemClick(item: SubNavBarItemDTO):void {
        if(!onClick) {
            return 
        }
        const clickedItem: SubNavBarItemDTO = {id:item.id , text: item.text}
        setCurrentAtiveId(item.id)
        onClick(clickedItem)
    }

    useEffect(() => {
        if (activeItem && activeItem.id) {
            setCurrentAtiveId(activeItem.id) 
        }
    },[activeItem])

    
    if(items && items.length) {
        listItems = items.map((item, index) => (
            <li title={item.text} key={index} className="c-sub-nav-bar__list-item" data-testid="qa-sub-nav-bar__list-item">
                <Button key={index} text={item.text} type="secondary" active={item.id === currentAtiveId ? true : false} onClick={() => itemClick(item)}></Button>
            </li>
        ))
    }

    return (
        <nav data-testid="qa-sub-nav-bar" className="c-sub-nav-bar">
            <ul className="c-sub-nav-bar__list" data-testid="qa-sub-nav-bar__list">
                {listItems} 
            </ul>
        </nav>
    )
}