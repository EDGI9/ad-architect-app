import { useEffect, useState } from "react";
import { NavBarDTO } from "../../integration/core/dtos/components/NavBar.dto";
import { Link } from "react-router-dom";
import { Image } from "../Image/Image";
import { Services } from "../../integration/services/index"
import { ImageListDTO } from "../../integration/core/dtos/data/ImageList.dto"
import "./NavBar.scss";

export function NavBar(props: NavBarDTO): JSX.Element {

    const hastRoutes = Object.keys(props.routes).length > 0;
    let [images, setImages] = useState<ImageListDTO>({});


    useEffect(() => {
        Services.Images.getAllImages().then((response: ImageListDTO) => {
            if (!response) {
                return
            }
            setImages(response)
        })
    },[])
    
    if (hastRoutes) {
        return (
            <nav data-testid="qa-nav-bar" className="c-nav-bar">
                <div className="c-nav-bar__logo">
                    {(!images && !images['LOGO']) && <Image image={images['LOGO']} width={60} height={60}/>}
                    {(!images && !images['LOGO_NAME']) && <Image image={images['LOGO_NAME']} width={150} height={15}/>}
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
                    
                    {(!images && !images['ICON_SEARCH']) && <Image image={images['ICON_SEARCH']} width={20} height={20}/>}
                </div>
            </nav>
        );
    } else {
        return (<nav data-testid="qa-nav-bar" className="c-nav-bar"> </nav>) 
    }
}