export namespace Images {
    export interface Image {
        src: string
        name: string
    }
    export interface ImageList {
        [key: string]: Image
    }
}