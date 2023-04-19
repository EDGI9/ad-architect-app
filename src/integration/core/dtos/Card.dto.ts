import { ReactNode } from "react";

export interface CardDTO {
    backgroundColor?: string
    borderRadius?: number
    children: ReactNode,
    className?: string
}