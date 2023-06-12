import { ImagesService } from "./Images.service";
import { SliderService } from "./Slider.service";
import { HouseService } from "./House.service";
import { ImagesReaderAdapter } from "../adapters/ImagesReader.adapter";
import { SliderImagesReaderAdapter } from "../adapters/SliderImages.adapter";
import { HouseReaderAdapter } from "../adapters/HouseReader.adapter";

export const Services = {
    Images: ImagesService(ImagesReaderAdapter()),
    Slider: SliderService(SliderImagesReaderAdapter()),
    HouseAreas: HouseService(HouseReaderAdapter())
} as const;