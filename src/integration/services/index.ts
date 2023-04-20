import { ImagesService } from "./Images.service";
import { ImagesReaderAdapter } from "../adapters/ImagesReader.adapter";

export const Services = {
    Images: ImagesService(ImagesReaderAdapter())
} as const;