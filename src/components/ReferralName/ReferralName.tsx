import { ImageDataDTO } from "../../integration/core/dtos/ImageData.dto";
import { Services } from "../../integration/services/index";
import { Card } from "../Card/Card";
import { Image } from "../Image/Image";
import { Title } from "../Title/Title";
import "./ReferralName.scss";

const images = await Services.Images.getAllImages();

//@ts-ignore
export function ReferralName(props): JSX.Element {
    const image: ImageDataDTO = images.ICON_QUOTATION;
    return (
        <div data-testid="qa-referral-name" className="c-referral-name">
            <Card borderRadius={6} backgroundColor="#ECAE85E5">
                <div className="c-referral-name__image">
                    <Image image={image} height={70} width={70} />
                </div>                
                <div className="c-referral-name__text">
                    <Title type="h2" text={props.title} />
                    <p className="c-referral-name__subtitle">{props.subtitle}</p>
                </div>                
            </Card>
        </div>
    )
}