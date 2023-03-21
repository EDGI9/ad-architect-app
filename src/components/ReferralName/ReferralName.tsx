import "./ReferralName.scss"
import { Card } from "../Card/Card";
import { Image } from "../Image/Image";
import { Title } from "../Title/Title";
import { images } from "../../__mock__/images";

interface ReferralName {
    title: string
    subtitle: string
}

export function ReferralName(props: ReferralName): JSX.Element {
    return (
        <div data-testid="qa-referral-name" className="c-referral-name">
            <Card borderRadius={6} backgroundColor="#ECAE85E5">
                <div className="c-referral-name__image">
                    <Image imageData={images[0]} height={70} width={70} />
                </div>                
                <div className="c-referral-name__text">
                    <Title type="h2" text={props.title} />
                    <p className="c-referral-name__subtitle">{props.subtitle}</p>
                </div>                
            </Card>
        </div>
    )
}