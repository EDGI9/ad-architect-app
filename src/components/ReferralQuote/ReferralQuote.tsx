import {Components} from "../../interfaces/Components.d";
import { Card } from "../Card/Card";
import "./ReferralQuote.scss"



export function ReferralQuote(props: Components.ReferralQuote): JSX.Element {
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