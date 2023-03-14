import {RouterPaths} from "../../router/router-paths";
import {Link} from "react-router-dom";

export function NavBar(): JSX.Element {
    return (
        <nav data-testid="qa-nav-bar" className="c-nav-bar">
            {
                Object.values(RouterPaths).map((routeProperties, index) => (
                    <Link to={routeProperties.path} key={index}>{routeProperties.text} | </Link>
                ))
            } 
        </nav>
    );
}