import { Image } from "../Image/Image";

interface CarrouselDetail {
    image: {
        src: string,
        name: string
    }
    text: {
        title: string
        description: string
    }
}

export function CarrouselDetail(props: CarrouselDetail): JSX.Element {
    return (
        <div data-testid="qa-carrousel-detail" className="c-carrousel-detail">
            <div>
                <Image imageData={props.image} height={100} width={100}/>
            </div>
            <div>
                <h3>{props.text.title}</h3>
                <p>{props.text.description}</p>
            </div>
        </div>
    ) 
}