import { useState , useEffect} from 'react';
import {Images} from "../interfaces/Image.d";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { SubNavBar } from "../components/SubNavBar/SubNavBar";
import { CarrouselBig } from "../components/CarrouselBig/CarrouselBig";
import { CarrouselSmall } from "../components/CarrouselSmall/CarrouselSmall";
import { CarrouselDetail } from "../components/CarrouselDetail/CarrouselDetail";
import { slider } from "../__mock__/slider";

export function Renovations(): JSX.Element {
    const subNavBarLinks = ['Interiors', 'Exteriors', 'Kitchens', 'Bathrooms', 'Exterior', 'Gardens'];
    const image: Images.Image = {src:'', name:'', text:{title:'', description:''}}// Figure out cleaner way of doing this
    let [currentImage, setCurrentImage] = useState(image);

    const updateCurrentImage = (image: Images.Image) => {
        setCurrentImage(image)
    }

    useEffect( ()=> {
        setCurrentImage(slider.big_slider[0])
    } , [])
    
   
    return (
        <div>
            <section className="flex justify-start my-16 text-sm">
                <PageTitle text="Renovations"/>
            </section>
            <SubNavBar items={subNavBarLinks}></SubNavBar>
            <section className="mt-28">
                <CarrouselBig slides={slider.big_slider}></CarrouselBig>
            </section>
            <section className="flex justify-center mt-28">
                <CarrouselDetail image={currentImage} text={currentImage.text}></CarrouselDetail>
            </section>
            <section className="mt-28">
                <CarrouselSmall slides={slider.small_slider} onClick={updateCurrentImage}></CarrouselSmall>
            </section>
        </div>
    )
    
}
