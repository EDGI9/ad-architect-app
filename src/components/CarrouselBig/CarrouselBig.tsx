import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarrouselBigDTO } from "../../integration/core/dtos/CarrouselBig.dto";
import { ImageDataDTO } from "../../integration/core/dtos/data/ImageData.dto";
import { Image } from "../Image/Image";
import { Counter } from "../Counter/Counter";

import "./CarrouselBig.scss"

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export function CarrouselBig(props: CarrouselBigDTO) {

    const slides = props.slides.length > 0 ? props.slides : [];

    return (
        <Carousel 
          data-testid="qa-carrousel-big" 
          containerClass="c-carrousel-big" 
          sliderClass="c-carrousel-big__slide-container"
          itemClass="c-carrousel-big__slide-item-container"
          responsive={responsive} 
          infinite={true}
          autoPlay={false}
          centerMode={true}
          autoPlaySpeed={1000}
          transitionDuration={5000}
          removeArrowOnDeviceType={["tablet", "mobile"]}>
            {
              slides.map((slide: ImageDataDTO, index) => (
                  <div className="c-carrousel-big__slide-item" key={index}>
                      <Counter number={index + 1} type="primary" className="absolute left-2 top-2"/>
                      <Image image={slide.src} height={380} width={400} className="c-carrousel-big__slide-image" />
                  </div>
              ))
            }
        </Carousel>
    ) 
}