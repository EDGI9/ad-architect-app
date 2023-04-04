import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Components} from "../../interfaces/Components.d";
import {Images} from "../../interfaces/Image.d";
import { Image } from "../Image/Image";

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

export function CarrouselBig(props: Components.CarrouselBig) {

    const slides = props.slides.length > 0 ? props.slides : [];

    return (
        <Carousel 
          data-testid="qa-carrousel-big" 
          containerClass="c-carrousel-big" 
          sliderClass="c-carrousel-big__slide-container"
          itemClass="c-carrousel-big__slide-item-container"
          responsive={responsive} 
          infinite={true}
          autoPlay={true}
          centerMode={true}
          autoPlaySpeed={1000}
          transitionDuration={5000}
          removeArrowOnDeviceType={["tablet", "mobile"]}>
            {
              slides.map((slide: Images.Image, index) => (
                  <div className="c-carrousel-big__slide-item" key={index}>
                      <div className="c-carrousel-big__slide-number">{index+1}.</div>
                      <Image image={slide} height={380} width={400} className="c-carrousel-big__slide-image" />
                  </div>
              ))
            }
        </Carousel>
    ) 
}