import { ReactNode } from "react";
import  Route  from "./Routes.d";
import ImageInterface from "./Image.d";



export namespace Components {

    export interface Button {
        text: string
        type?: string
    }

    export interface Card {
        backgroundColor?: string
        borderRadius?: number
    export interface CarrouselDetail {
        image: ImageInterface
        text: {
            title: string
            description: string
        }
    }

    }

    export interface EmployeeCard {
        image: ImageInterface
        title: string
        subtitle: string
        text: string
    }

    export interface Image {
        imageData: ImageInterface
        height: number
        width: number
    }

    export interface NavBar {
        routes: Route 
    }

    export interface ReferralName {
        title: string
        subtitle: string
    }

    export interface ReferralQuote {
        text: string
    }

    export interface SectionBubble {
        title: string
        text: string
        align: string
    }

    export interface SubNavBar {
        items: Array<string>
    }
    
    export interface TextArea {
        text?: string
        type?: string
        placeholder?: string
    }

    export interface TextInput {
        text?: string
        type?: string
        placeholder?: string
    }

    export interface Title {
        type: string
        text: string
    }
  }