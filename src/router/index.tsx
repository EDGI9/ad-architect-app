import {Route, Routes} from "react-router-dom";
import {RouterPaths} from "./router-paths";
import {Home} from "../views/Home";
import {Renovations} from "../views/Renovations";
import {WhoWeAre} from "../views/WhoWeAre";

export function Router(): JSX.Element {
    return (
        <Routes>
            <Route path={RouterPaths.home.path} element={<Home />}/>
            <Route path={RouterPaths.renovations.path} element={<Renovations />}/>
            <Route path={RouterPaths.whoWeAre.path} element={<WhoWeAre />}/>
        </Routes>
    );
}