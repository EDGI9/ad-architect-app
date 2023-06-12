import { RoutesDTO } from "../integration/core/dtos/Routes.dto";

const baseUrl ="/ad-architect-app"

export const RouterPaths: RoutesDTO = {
    HOME: {
        text: 'Home',
        path: `${baseUrl}/`
    },
    RENOVATIONS: {
        text: 'Renovations',
        path: `${baseUrl}/renovations`
    },
    NEW_BUILDS: {
        text: 'New Builds',
        path: `${baseUrl}/newbuilds`
    },
    WHO_WE_ARE: {
        text: 'Who We Are',
        path: `${baseUrl}/whoweare`
    },
    CONTACT_US: {
        text: 'Contact Us',
        path: `${baseUrl}/contactus`
    }
} as const;