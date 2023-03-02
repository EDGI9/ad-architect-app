interface ReferralName {
    text: string
}

export function ReferralName(props: ReferralName): JSX.Element {
    return (
        <div data-testid="qa-referral-name" className="c-referral-name">
            <p className="c-referral-name__text">{props.text}</p>
        </div>
    )
}