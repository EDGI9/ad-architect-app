import { MouseEventHandler, ReactNode } from "react";
import  Route  from "./Routes.d";
import {Images} from "./Image.d";



export namespace Components {

    export interface Button {
        text?: string
        type?: string
        round?: boolean
        small?: boolean
        className?: string
        onClick?: MouseEventHandler
    }

    export interface Card {
        backgroundColor?: string
        borderRadius?: number
        children: ReactNode,
        className?: string
    }

    export interface CarrouselDetail {
        image: Images.Image
        text: {
            title: string
            description: string
        }
    }

    export interface CarrouselSmall {
        slides: Array<Images.Image>
    }

    //TODO fetch intreface from employees
    export interface EmployeeCard {
        image: Images.Image
        title: string
        subtitle: string
        text: string
        backgroundColor?: string
    }
    
    export interface Footer {
        routes: Route 
    }

    export interface Image {
        image: Images.Image
        height?: number
        width?: number
    }

    export interface NavBar {
        routes: Route 
    }

    export interface PageTitle {
        text: string 
        className?: string
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
        className?: string
    }
  }