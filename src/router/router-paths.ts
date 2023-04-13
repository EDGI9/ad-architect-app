import Routes from "../interfaces/Routes.d";

const baseUrl ="/ad-architect-app"

export const RouterPaths: Routes = {
    HOME: {
        text: 'Home',
        path: `${baseUrl}/`
    } ,
    RENOVATIONS: {
        text: 'Renovations',
        path: `${baseUrl}/renovations`
    } ,
    WHO_WE_ARE: {
        text: 'Who We Are',
        path: `${baseUrl}/whoweare`
    },
    CONTACT_US: {
        text: 'Contact Us',
        path: `${baseUrl}/contactus`
    }
} as const;