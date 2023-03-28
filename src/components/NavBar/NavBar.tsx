import {Components} from "../../interfaces/Components.d";
import {Link} from "react-router-dom";
import { Image } from "../Image/Image";
import { images } from "../../__mock__/images";

import "./NavBar.scss"

export function NavBar(props: Components.NavBar): JSX.Element {

    const hastRoutes = Object.keys(props.routes).length > 0;
    
    if (hastRoutes) {
        return (
            <nav data-testid="qa-nav-bar" className="c-nav-bar">
                <div className="c-nav-bar__logo">
                    <Image imageData={images.logo} width={60} height={60}/>
                    <Image imageData={images.logo_name} width={150} height={15}/>
                </div>
                <div className="c-nav-bar__links">
                    {
                        Object.values(props.routes).map((routeProperties, index) => (
                            //@ts-ignore
                            <Link className="c-nav-bar__link" to={routeProperties.path} key={index}>{routeProperties.text} </Link>
                        ))
                    } 
                </div>
                <div className="c-nav-bar__search">
                    <Image imageData={images.icon_search} width={20} height={20}/>
                </div>
            </nav>
        );
    } else {
        return (<nav data-testid="qa-nav-bar" className="c-nav-bar"> </nav>) 
    }
}