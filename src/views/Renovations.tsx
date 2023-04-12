import { useState , useEffect} from 'react';
import {Images} from "../interfaces/Image.d";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { SubNavBar } from "../components/SubNavBar/SubNavBar";
import { CarrouselBig } from "../components/CarrouselBig/CarrouselBig";
import { CarrouselSmall } from "../components/CarrouselSmall/CarrouselSmall";
import { CarrouselDetail } from "../components/CarrouselDetail/CarrouselDetail";
import { ContactBlock } from "../components/ContactBlock/ContactBlock";
import { Card } from "../components/Card/Card";
import { Counter } from "../components/Counter/Counter";
import { Title } from "../components/Title/Title";
import { slider } from "../__mock__/slider";
import { RenovationPaths } from "../router/renovations-paths"

export function Renovations(): JSX.Element {
    const image: Images.Image = {id: 1 , src:'', name:'', text:{title:'', description:''}}// Figure out cleaner way of doing this

    let [currentImage, setCurrentImage] = useState(image);
    let [currentImageIndex, setCurrentImageIndex] = useState(1);
    let [currentNav, setCurrentNav] = useState("");

    const updateCurrentImage = (image: Images.Image) => {
        const index = slider.findIndex(item => item.name == image.name) + 1;
        setCurrentImageIndex(index);
        setCurrentImage(image);
    }

    const updateCurrentNav = (navTitle:string):void => {
        setCurrentNav(navTitle)
    }

    useEffect( ()=> {
        setCurrentImage(slider[0]);
        setCurrentNav(RenovationPaths.kitchens.text)
    } , [])
    
   
    return (
        <div>
            <section className="flex justify-start my-16 text-sm">
                <PageTitle text="Renovations"/>
            </section>
            <SubNavBar items={RenovationPaths} currentNav={currentNav} onClick={updateCurrentNav}></SubNavBar>
            <section className="mt-28">
                <CarrouselBig slides={slider}></CarrouselBig>
            </section>
            <Card backgroundColor='#E1E1E1' className='md:!bg-white'>
                <section className="flex justify-center flex-col items-center">
                    <div className="flex justify-center items-center flex-col mt-28">
                        
                        <div className='flex justify-self-start self-start flex-col md:flex-row md:items-center mb-4'>
                            <Counter number={currentImageIndex} type="secondary" className="mr-5"/>
                            <div className='flex items-center gap-2'>
                                <Title type='h3' text={currentNav} className='text-[#7B7B7B]' /> / <Title type='h3' text={currentImage.text.title} className='text-[#7B7B7B] font-light' />
                            </div>
                        </div>
                        <div>
                            <CarrouselDetail image={currentImage} text={currentImage.text}></CarrouselDetail>
                        </div>
                    </div>
                    <div className='w-screen sm:w-full lg:w-2/3 mt-5'>
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
