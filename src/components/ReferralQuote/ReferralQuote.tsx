interface ReferralQuote {
    text: string
}
export function ReferralQuote(props: ReferralQuote): JSX.Element {
    return (
        <div data-testid="qa-referral-quote" className="c-referral-quote">
            <p className="c-referral-quote__text">
                {props.text}
            </p>
        </div>
    )
}