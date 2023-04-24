import { ReferralNameDTO } from "../../integration/core/dtos/components/ReferralName.dto";
import { ImageDataDTO } from "../../integration/core/dtos/data/ImageData.dto";
import { Card } from "../Card/Card";
import { Image } from "../Image/Image";
import { Title } from "../Title/Title";
import { images } from "../../__mock__/images";
import "./ReferralName.scss";

export function ReferralName(props: ReferralNameDTO): JSX.Element {
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