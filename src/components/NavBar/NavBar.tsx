import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "../Image/Image";
import { Services } from "../../integration/services/index"
import { ImageListDTO } from "../../integration/core/dtos/ImageList.dto"
import "./NavBar.scss";

//@ts-ignore
export function NavBar(props): JSX.Element {

    const hastRoutes = Object.keys(props.routes).length > 0;
    let [images, setImages] = useState<ImageListDTO>({});
    let [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open)
    }


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
                <Link className="c-nav-bar__logo" to={props.routes.HOME.path}>
                    <Image image={images.LOGO} width={60} height={60}/>
                    <Image image={images.LOGO_NAME} width={150} height={15}/> 
                </Link>
                <div className={`c-nav-bar__links ${open ? 'c-nav-bar__links--active' : ''}`}>
                    {
                        Object.values(props.routes).map((routeProperties, index) => (
                            //@ts-ignore
                            <Link className="c-nav-bar__link" to={routeProperties.path} key={index}>{routeProperties.text} </Link>
                        ))
                    } 
                </div>
                <button className="c-nav-bar__menu-button" onClick={toggleOpen}>
                    <Image image={images.ICON_BURGUER_MENU} width={20} height={20}/>
                </button>
                <div className="c-nav-bar__search">
                    <Image image={images.ICON_SEARCH} width={20} height={20}/>
                </div>
            </nav>
        );
    } else {
        return (<nav data-testid="qa-nav-bar" className="c-nav-bar"> </nav>) 
    }
}