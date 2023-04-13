import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Components} from "../../interfaces/Components.d";
import {Images} from "../../interfaces/Image.d";
import { Image } from "../Image/Image";

import "./CarrouselSmall.scss"

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 30
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 20
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 10
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 15
    }
  };

export function CarrouselSmall(props: Components.CarrouselSmall) {

    const slides = props.slides.length > 0 ? props.slides : [];

    return (
        <Carousel 
          data-testid="qa-carrousel-small" 
          containerClass="c-carrousel-small" 
          itemClass="c-carrousel-small__slide-item-container"
          sliderClass="c-carrousel-small__slide-container"
          partialVisible={true} 
          responsive={responsive} 
          swipeable={true} 
          draggable={true} 
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={5000}
          removeArrowOnDeviceType={["tablet", "mobile"]}>
            {
              slides.map((slide: Images.Image, index) => (
                 <Image image={slide.src} height={150} width={150} key={index} onClick={props.onClick}/>
              ))
            }
        </Carousel>
    ) 
    
}