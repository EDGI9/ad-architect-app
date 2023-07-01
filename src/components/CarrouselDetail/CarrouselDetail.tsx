import { useEffect, useState } from "react";
import { ImageListDTO } from "../../integration/core/dtos/ImageList.dto";
import { Image } from "../Image/Image";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Services } from "../../integration/services/index"
import "./CarrouselDetail.scss";


//@ts-ignore
export function CarrouselDetail(props): JSX.Element {
    let [detailsVisibility, setDetailsVisibility] = useState(false);
    let visibiliTyClass:string = detailsVisibility === true ? 'c-carrousel-detail__details-card--visible':'';
    let [images, setImages] = useState<ImageListDTO>({})
    const title: string = props.text?.title !== undefined ? props.text.title : "Title";
    const description: string = props.text?.description !== undefined ? props.text.description : "Title";
    let arrowDirectionClass = "c-carrousel-detail__details-card-button_icon";
    
    function toggleDetailsContainer() {
        setDetailsVisibility(previousValue => !previousValue);
    }

    useEffect(() => {
        Services.Images.getAllImages().then((response: ImageListDTO) => {
            if (!response) {
                return
            }
            setImages(response)
        })
    },[])

    return (
        <div data-testid="qa-carrousel-detail" className="c-carrousel-detail">
            <Image image={props.image.src} />

            <Card backgroundColor="#E1E1E1" borderRadius={6} className={`c-carrousel-detail__details-card ${visibiliTyClass}`}>
                <Button text={<Image image={images.ICON_ARROW} width={10} height={10} className={`${arrowDirectionClass} ${detailsVisibility === false ? arrowDirectionClass+'--inverted':''}`}/>} type="terceary" className="c-carrousel-detail__details-card-button" round={true} small={true} onClick={toggleDetailsContainer}></Button>
                <div className="c-carrousel-detail__text-container">
                    <Title type="h3" text={title}></Title>
                    <p>{description}</p>
                </div> 
            </Card>
        </div>
    ) 
}