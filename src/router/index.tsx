import {Route, Routes} from "react-router-dom";
import {RouterPaths} from "./router-paths";
import {Home} from "../views/Home";
import {Renovations} from "../views/Renovations";
import {WhoWeAre} from "../views/WhoWeAre";
import {ContactUs} from "../views/ContactUs";

export function Router(): JSX.Element {
    return (
        <Routes>
            <Route path={RouterPaths.HOME.path} element={<Home />}/>
            <Route path={RouterPaths.RENOVATIONS.path} element={<Renovations />}/>
            <Route path={RouterPaths.WHO_WE_ARE.path} element={<WhoWeAre />}/>
            <Route path={RouterPaths.CONTACT_US.path} element={<ContactUs />}/>
        </Routes>
    );
}