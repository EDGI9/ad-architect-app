import { MouseEvent, ReactNode } from "react";
import  Route  from "./Routes.d";
import {Images} from "./Image.d";
import {Employees} from "./Employees.d";



export namespace Components {

    export interface Button {
        text?: string
        type?: string
        round?: boolean
        small?: boolean
        className?: string
        active?: boolean
        onClick?: MouseEvent
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

    export interface CarrouselBig {
        slides: Array<Images.Image>
    }

    export interface CarrouselSmall {
        slides: Array<Images.Image>
        onClick?: MouseEvent
    }
    export interface ContactBlock {
        title: string
        text: string
        backgroundColor?: string
    }

    export interface Counter {
        number: number
        type?: string
        className?: string
    }

    export interface EmployeeCard extends Employees.Employee {
        backgroundColor?: string
    }
    
    export interface Footer {
        routes: Route 
    }

    export interface Image {
        image: Images.Image
        height?: number
        width?: number
        imgClassName?: string
        className?: string
        onClick?: MouseEvent
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
        align?: string
    }

    export interface SubNAvBarItem {
        id: string
        text: string
        active?: boolean
    }
   

    export interface SubNavBar {
        items?: SubNAvBarItem[]
        activeItem?: SubNAvBarItem
        onClick?: (item: SubNAvBarItem) => void
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