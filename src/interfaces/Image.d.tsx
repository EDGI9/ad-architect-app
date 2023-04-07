export namespace Images {
    export interface Image {
        src: string
        name: string
        text: {
            title: string
            description: string
        }
    }
    export interface ImageList {
        [key: string]: Image
    }
}