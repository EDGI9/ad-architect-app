import { Images } from "../interfaces/Image.d";
import quotation from "../assets/svg/quotation.svg";
import search from "../assets/svg/search.svg";
import bigImg1 from "../assets/images/bigImg1.png";
import bigImg2 from "../assets/images/bigImg2.png";
import bigImg3 from "../assets/images/bigImg3.png";
import logo from "../assets/images/logo.png";
import logoName from "../assets/images/logoName.png";


export const images: Images.ImageList = {
    'icon_quotation'  : {
        src: quotation,
        name: 'Quotation'
    },
    'icon_search' : {
        src: search,
        name: 'Search'
    },
    'big_img_1' : {
        src: bigImg1,
        name: 'Big Image 1'
    },
    'big_img_2' : {
        src: bigImg2,
        name: 'Big Image 2'
    },
    'big_img_3' : {
        src: bigImg3,
        name: 'Big Image 3'
    },
    'logo' : {
        src: logo,
        name: 'Ad Architects Logo'
    },
    'logo_name' : {
        src: logoName,
        name: 'Ad Architects'
    },
};