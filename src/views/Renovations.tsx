import { useState , useEffect} from 'react';
import {Images} from "../interfaces/Image.d";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { SubNavBar } from "../components/SubNavBar/SubNavBar";
import { CarrouselBig } from "../components/CarrouselBig/CarrouselBig";
import { CarrouselSmall } from "../components/CarrouselSmall/CarrouselSmall";
import { CarrouselDetail } from "../components/CarrouselDetail/CarrouselDetail";
import { ContactBlock } from "../components/ContactBlock/ContactBlock";
import { Card } from "../components/Card/Card";
import { slider } from "../__mock__/slider";

export function Renovations(): JSX.Element {
    const subNavBarLinks = ['Interiors', 'Exteriors', 'Kitchens', 'Bathrooms', 'Exterior', 'Gardens'];
    const image: Images.Image = {id: 1 , src:'', name:'', text:{title:'', description:''}}// Figure out cleaner way of doing this

    let [currentImage, setCurrentImage] = useState(image);
    let [currentImageIndex, setCurrentImageIndex] = useState(1);

    const updateCurrentImage = (image: Images.Image) => {
        const index = slider.findIndex(item => item.name == image.name) + 1;
        setCurrentImageIndex(index);
        setCurrentImage(image);
    }

    useEffect( ()=> {
        setCurrentImage(slider[0]);
    } , [])
    
   
    return (
        <div>
            <section className="flex justify-start my-16 text-sm">
                <PageTitle text="Renovations"/>
            </section>
            <SubNavBar items={subNavBarLinks}></SubNavBar>
            <section className="mt-28">
                <CarrouselBig slides={slider}></CarrouselBig>
            </section>
            <Card backgroundColor='#E1E1E1' className='md:!bg-white'>
                <section className="flex justify-center flex-col items-center">
                    <div className="flex justify-center items-center flex-col mt-28">
                        <div className='flex justify-self-start self-start flex-col md:flex-row md:items-center mb-4'>
                            <div className='pt-4 pl-6 pb-1 pr-2 border-2 rounded-xl border-[#ECAE85] mr-5 text-[#ECAE85]'>{currentImageIndex}</div>
                            <p>{currentImage.text.title}</p>
                        </div>
                        <div>
                            <CarrouselDetail image={currentImage} text={currentImage.text}></CarrouselDetail>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <CarrouselSmall slides={slider} onClick={updateCurrentImage}></CarrouselSmall>
                    </div>
                </section>
             </Card>
            <section className="flex justify-center mt-28">
                <ContactBlock title='Let’s start a conversation!' text='Get in touch for any questions you may have and we’ll work together to find the best solution.'/>
            </section>
        </div>
    )
    
}
