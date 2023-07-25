import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageDataDTO } from "../../integration/core/dtos/ImageData.dto";
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

//@ts-ignore
export function CarrouselSmall(props) {

    const slides = props.slides.length > 0 ? props.slides : [];

    function slideClick(slide: ImageDataDTO) {
      if (!props.onClick) {
          return
      }
      
      props.onClick(slide)
    }

    return (
        <Carousel 
          containerClass="qa-carrousel-small c-carrousel-small" 
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
              //@ts-ignore
              slides.map((slide: ImageDataDTO, index) => (
                 <Image image={slide.src} height={150} width={150} key={index} onClick={() => slideClick(slide)}/>
              ))
            }
        </Carousel>
    ) 
    
}