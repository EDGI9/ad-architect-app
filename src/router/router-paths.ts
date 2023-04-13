import Routes from "../interfaces/Routes.d";

const baseUrl ="/ad-architect-app"

export const RouterPaths: Routes = {
    home: {
        text: 'Home',
        path: `${baseUrl}/`
    } ,
    renovations: {
        text: 'Renovations',
        path: `${baseUrl}/renovations`
    } ,
    whoWeAre: {
        text: 'Who We Are',
        path: `${baseUrl}/whoweare`
    },
    contactUs: {
        text: 'Contact Us',
        path: `${baseUrl}/contactus`
    }
} as const;