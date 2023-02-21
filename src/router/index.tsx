import {Route, Routes} from "react-router-dom";
import {RouterPaths} from "./router-paths";
import {Home} from "../views/Home";
import {Renovations} from "../views/Renovations";
import {WhoWeAre} from "../views/WhoWeAre";

export function Router(): JSX.Element {
    return (
        <Routes>
            <Route path={RouterPaths.Home} element={<Home />}/>
            <Route path={RouterPaths.Renovations} element={<Renovations />}/>
            <Route path={RouterPaths.WhoWeAre} element={<WhoWeAre />}/>
        </Routes>
    );
}