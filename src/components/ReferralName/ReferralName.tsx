import {Components} from "../../interfaces/Components.d";
import {Images} from "../../interfaces/Image.d";
import { Card } from "../Card/Card";
import { Image } from "../Image/Image";
import { Title } from "../Title/Title";
import { images } from "../../__mock__/images";
import "./ReferralName.scss"

export function ReferralName(props: Components.ReferralName): JSX.Element {
    const image: Images.Image = images.ICON_QUOTATION;
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