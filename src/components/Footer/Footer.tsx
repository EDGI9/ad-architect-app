import { FooterDTO } from "../../integration/core/dtos/Footer.dto";
import { Link } from "react-router-dom";
import { Image } from "../Image/Image";
import { Title } from "../Title/Title";
import { images } from "../../__mock__/images";
import "./Footer.scss";

export function Footer(props: FooterDTO): JSX.Element {
    const hastRoutes = Object.keys(props.routes).length > 0;
    let routes;

    if (hastRoutes) {
        routes=  Object.values(props.routes).map((routeProperties, index) => (
            //@ts-ignore
            <Link className="c-footer__link" to={routeProperties.path} key={index}>{routeProperties.text} </Link>
        ))
    }
    return (
        <footer data-testid="qa-footer" className="c-footer">
            <div className="c-footer__logo">
                <Image image={images.LOGO_2} width={60} height={60}/>
                <Image image={images.LOGO_NAME_2} width={150} height={15}/>
            </div>
            <div className="c-footer__links">
                {routes}
            </div>
            <div className="c-footer__footer">
                <div>
                    <Image image={images.LOGO_2} width={40} height={40}/>
                    <Title type="h6" text="Cookies policy | Privacy policy"/>
                </div>
                <div>
                    <Image image={images.ICON_ACCESSABILITY} width={30} height={30}/>
                    <Title type="h6" text="Site accessibility options"/>
                </div>
                <div>
                    <Title type="h6" text="Follow us for inspiration"/>
                    <Image image={images.ICON_TWITTTER} width={35} height={35}/>
                    <Image image={images.ICON_INSTAGRAM} width={35} height={35}/>
                </div>
            </div>
        </footer>
    )
    
}