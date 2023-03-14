import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "../Image/Image";

/* Use image interface for the slides */
interface Carrousel {
  slides: [
    {
      src: string
      name: string
    }
  ]
}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

export function CarrouselSmall(props: Carrousel) {
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
          {/* Add interface for image */}
            {
              props.slides.map((slide: object, index) => (
                <Image imageData={slide} height={100} width={100} key={index} />
              ))
            }
        </Carousel>
    ) 
    
}