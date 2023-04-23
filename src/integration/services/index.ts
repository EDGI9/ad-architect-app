import { ImagesService } from "./Images.service";
import { SliderService } from "./Slider.service";
import { ImagesReaderAdapter } from "../adapters/ImagesReader.adapter";
import { SliderImagesReaderAdapter } from "../adapters/SliderImages.adapter";

export const Services = {
    Images: ImagesService(ImagesReaderAdapter()),
    Slider: SliderService(SliderImagesReaderAdapter())
} as const;