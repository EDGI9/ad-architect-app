import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Components} from "../../interfaces/Components.d";
import {Images} from "../../interfaces/Image.d";
import { Image } from "../Image/Image";


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export function CarrouselSmall(props: Components.CarrouselSmall) {

    const slides = props.slides.length > 0 ? props.slides : [];

    return (
        <Carousel 
          data-testid="qa-carrousel-small" 
          containerClass="c-carrousel-small" 
          responsive={responsive} 
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={5000}
          removeArrowOnDeviceType={["tablet", "mobile"]}>
            {
              slides.map((slide: Images.Image, index) => (
                 <Image image={slide} height={100} width={100} key={index} />
              ))
            }
        </Carousel>
    ) 
    
}