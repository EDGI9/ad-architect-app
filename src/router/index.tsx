import {Route, Routes} from "react-router-dom";
import {RouterPaths} from "./RouterPaths";
import {Home} from "../views/Home";
import {Renovations} from "../views/Renovations";
import {NewBuilds} from "../views/NewBuilds";
import {WhoWeAre} from "../views/WhoWeAre";
import {ContactUs} from "../views/ContactUs";

export function Router(): JSX.Element {
    return (
        <Routes>
            <Route path={RouterPaths.HOME.path} element={<Home />}/>
            <Route path={RouterPaths.RENOVATIONS.path} element={<Renovations />}/>
            <Route path={RouterPaths.NEW_BUILDS.path} element={<NewBuilds />}/>
            <Route path={RouterPaths.WHO_WE_ARE.path} element={<WhoWeAre />}/>
            <Route path={RouterPaths.CONTACT_US.path} element={<ContactUs />}/>
        </Routes>
    );
}