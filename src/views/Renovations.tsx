import { useEffect, useState } from 'react';
import { HouseAreaDTO } from "../integration/core/dtos/HouseArea.dto";
import { SliderImageDTO } from "../integration/core/dtos/SliderImage.dto";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { SubNavBar } from "../components/SubNavBar/SubNavBar";
import { CarrouselBig } from "../components/CarrouselBig/CarrouselBig";
import { CarrouselSmall } from "../components/CarrouselSmall/CarrouselSmall";
import { CarrouselDetail } from "../components/CarrouselDetail/CarrouselDetail";
import { ContactBlock } from "../components/ContactBlock/ContactBlock";
import { Card } from "../components/Card/Card";
import { Counter } from "../components/Counter/Counter";
import { Title } from "../components/Title/Title";
import { Services } from "../integration/services/index";


export function Renovations(): JSX.Element {
    let [currentImageIndex, setCurrentImageIndex] = useState(1); 
    //@ts-ignore
    let [HouseAreaPaths, setHouseAreaPaths] = useState<HouseAreaDTO[]>([]);
    //@ts-ignore
    let [currentHouseArea, setCurrentHouseArea] = useState<HouseAreaDTO>({});
    //@ts-ignore
    let [currentImage, setCurrentImage] = useState<SliderImageDTO>({});
    let [sliderImages, setSliderImages] = useState([]);

    const updateCurrentImage = (image: SliderImageDTO) => {
        const index = sliderImages.findIndex((item: SliderImageDTO) => item.id == image.id) + 1;
        setCurrentImageIndex(index);
        setCurrentImage(image);
    }


    const updateCurrentHouseArea= (houseArea: HouseAreaDTO):void => {
        setCurrentHouseArea(houseArea);
    }

    useEffect(() => {
        Services.HouseAreas.getAllHouseAreas().then((houseAreas) => {
            updateCurrentHouseArea(houseAreas[0]) 
            setHouseAreaPaths(houseAreas); 
        })
    },[])

    useEffect(() => {
        if (currentHouseArea.id) {
            Services.Slider.getByArea(currentHouseArea.id).then((images) => {
                //@ts-ignore
                setSliderImages(images)
            })
        }
    },[currentHouseArea.id])

    useEffect(() => {
        if (sliderImages.length > 0) {
            setCurrentImage(sliderImages[0]);
        }
    },[sliderImages])

   
    return (
        <div>
            <section className="flex justify-start my-16 text-sm">
                <PageTitle text="Renovations"/>
            </section>
            <SubNavBar 
                items={HouseAreaPaths} 
                activeItem={currentHouseArea}
                onClick={updateCurrentHouseArea} 
            />

            <section className="mt-28">
                <CarrouselBig 
                    slides={sliderImages}
                />
            </section>
            <Card backgroundColor='#E1E1E1' className='md:!bg-white'>
                <section className="flex justify-center flex-col items-center">
                    <div className="flex justify-center items-center flex-col mt-28">
                        
                        <div className='flex justify-self-start self-start flex-col md:flex-row md:items-center mb-4'>
                            <Counter number={currentImageIndex} type="secondary" className="mr-5"/>
                            <div className='flex items-center gap-2'>
                                <Title 
                                    type='h3' 
                                    text={currentHouseArea.text} 
                                    className='text-[#7B7B7B]' 
                                /> 
                                / 
                                <Title 
                                    type='h3' 
                                    text={currentImage.text?.title} 
                                    className='text-[#7B7B7B] font-light' 
                                />
                            </div>
                        </div>
                        <div>
                            <CarrouselDetail 
                                image={currentImage} 
                                text={currentImage.text} 
                            />
                        </div>
                    </div>
                    <div className='w-screen sm:w-full lg:w-2/3 mt-5'>
                        <CarrouselSmall 
                            slides={sliderImages} 
                            onClick={updateCurrentImage} 
                        />
                    </div>
                </section>
             </Card>
            <section className="flex justify-center mt-10">
                <ContactBlock title='Let’s start a conversation!' text='Get in touch for any questions you may have and we’ll work together to find the best solution.'/>
            </section>
        </div>
    )
    
}
