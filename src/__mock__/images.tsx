import { Images } from "../interfaces/Image.d";
import quotation from "../assets/svg/quotation.svg";
import search from "../assets/svg/search.svg";
import accessability from "../assets/svg/accessability.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import bigImg1 from "../assets/images/bigImg1.png";
import bigImg2 from "../assets/images/bigImg2.png";
import bigImg3 from "../assets/images/bigImg3.png";
import logo from "../assets/images/logo.png";
import logoName from "../assets/images/logoName.png";
import logo2 from "../assets/images/logo2.png";
import logoName2 from "../assets/images/logoName2.png";
import employee1 from "../assets/images/employee_1.png";
import employee2 from "../assets/images/employee_2.png";
import employee3 from "../assets/images/employee_3.png";

//TODO: Update list of images in mock
export const images: Images.ImageList = {
    'icon_quotation'  : {
        src: quotation,
        name: 'Quotation'
    },
    'icon_search' : {
        src: search,
        name: 'Search'
    },
    'icon_accessability' : {
        src: accessability,
        name: 'Accessability'
    },
    'icon_twitter' : {
        src: twitter,
        name: 'Twitter'
    },
    'icon_instagram' : {
        src: instagram,
        name: 'Instagram'
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
    'logo_2' : {
        src: logo2,
        name: 'Ad Architects Logo'
    },
    'logo_name_2' : {
        src: logoName2,
        name: 'Ad Architects'
    },
    'employee_1' : {
        src: employee1,
        name: 'Employee 1'
    },
    'employee_2' : {
        src: employee2,
        name: 'Employee 2'
    },
    'employee_3' : {
        src: employee3,
        name: 'Employee 3'
    },
};