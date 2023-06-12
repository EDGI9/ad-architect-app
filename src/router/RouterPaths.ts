import { RoutesDTO } from "../integration/core/dtos/Routes.dto";

const baseUrl ="/ad-architect-app"

export const RouterPaths: RoutesDTO = {
    HOME: {
        id: 'HOME',
        text: 'Home',
        path: `${baseUrl}/`
    },
    NEW_BUILDS: {
        id: 'NEW_BUILDS',
        text: 'New Builds',
        path: `${baseUrl}/newbuilds`
    },
    RENOVATIONS: {
        id: 'RENOVATIONS',
        text: 'Renovations',
        path: `${baseUrl}/renovations`
    },
    WHO_WE_ARE: {
        id: 'WHO_WE_ARE',
        text: 'Who We Are',
        path: `${baseUrl}/whoweare`
    },
    CONTACT_US: {
        id: 'CONTACT_US',
        text: 'Contact Us',
        path: `${baseUrl}/contactus`
    }
} as const;