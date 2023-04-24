import { ReferralQuoteDTO } from "../../integration/core/dtos/components/ReferralQuote.dto";
import { Card } from "../Card/Card";
import "./ReferralQuote.scss";



export function ReferralQuote(props: ReferralQuoteDTO): JSX.Element {
    return (
        <div data-testid="qa-referral-quote" className="c-referral-quote">
            <Card borderRadius={6}>
                <p className="c-referral-quote__text">
                    {props.text}
                </p>
            </Card>
        </div>
    )
}