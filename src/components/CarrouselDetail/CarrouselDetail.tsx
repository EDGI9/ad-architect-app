import { useState } from "react";
import {Components} from "../../interfaces/Components.d";
import { Image } from "../Image/Image";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import "./CarrouselDetail.scss"




export function CarrouselDetail(props: Components.CarrouselDetail): JSX.Element {
    let [detailsVisibility, setDetailsVisibility] = useState(false);
    let visibiliTyClass:string = detailsVisibility === true ? 'c-carrousel-detail__details-card--visible':'';
    const title: string = props.text?.title !== undefined ? props.text.title : "Title";
    const description: string = props.text?.description !== undefined ? props.text.description : "Title";
    
    function toggleDetailsContainer() {
        setDetailsVisibility(previousValue => !previousValue);
    }

    return (
        <div data-testid="qa-carrousel-detail" className="c-carrousel-detail">
            <Image image={props.image} />

            <Card backgroundColor="#E1E1E1" borderRadius={6} className={`c-carrousel-detail__details-card ${visibiliTyClass}`}>
                <Button text="<" type="terceary" round={true} small={true} onClick={toggleDetailsContainer}></Button>
                <div className="c-carrousel-detail__text-container">
                    <Title type="h3" text={title}></Title>
                    <p>{description}</p>
                </div> 
            </Card>
        </div>
    ) 
}