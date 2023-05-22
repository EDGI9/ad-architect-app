import { useEffect, useState } from "react";
import { ImageListDTO } from "../integration/core/dtos/ImageList.dto";
import { Image } from "../components/Image/Image";
import { ContactBlock } from "../components/ContactBlock/ContactBlock";
import { SectionBubble } from "../components/SectionBuble/SectionBubble";
import { ReferralName } from "../components/ReferralName/ReferralName";
import { ReferralQuote } from "../components/ReferralQuote/ReferralQuote";
import { Title } from "../components/Title/Title";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import { Services } from "../integration/services/index";

export function Home(): JSX.Element {
    //@ts-ignore
    let [images, setImages] = useState<ImageListDTO>({})

    async function getImages() {
        const imagesList:ImageListDTO = await Services.Images.getAllImages()
        setImages(imagesList)
    }
    
    useEffect(() => {
        getImages()
    },[])
    
    return (
        <div>
            <section className="relative md:flex md:h-[600px] overflow-hidden">
                <Card backgroundColor="" className="bg-white md:bg-[#ECAE85]/20 backdrop-blur-sm w-full md:w-1/2 md:max-w-xl my-10 rounded-lg max-md:p-0 max-md:flex max-md:flex-col max-md:items-center">
                    <Title type="h1" text="We’re here to help you build your dream home" className="text-6xl max-md:px-11"/> 
                    <Image image={images.BIG_IMG_3} className="md:hidden w-full -z-50 max-md:py-11" imgClassName="w-full h-full md:-translate-y-1/3" />
                    <p className="py-5 max-md:px-11 max-md:text-center">Whether you’re looking for a bachelor pad or a family home for twelve, we’ll work with you to bring your dream home to life.</p>
                    <Button text="get in touch"></Button>
                </Card>
                <Image image={images.BIG_IMG_3} className="max-md:hidden absolute w-full -z-50" imgClassName="w-full h-full md:-translate-y-1/3" />
            </section>
            <section className="flex flex-col md:flex-row md:h-[500px]  my-40">
                <div className="relative w-full md:w-1/2">
                    <div className="flex md:absolute inset-x-0 -bottom-20 justify-start">
                        <SectionBubble 
                            align="right"
                            className="max-md:!rounded-none max-md:w-full max-md:max-w-none max-md:!items-center"
                            title="new builds" 
                            text="Dream it & we’ll design it. From the conception stages all the way to choosing your finishes, we’ll work together with you to bring your dream home to life.">
                        </SectionBubble>
                    </div>
                    <div className="relative overflow-hidden w-full h-full -z-50">
                        <Image image={images.BIG_IMG_2}  imgClassName="w-full"/>
                    </div>
                </div>
                <div className="relative md:flex w-full md:w-1/2">
                    <div className="flex md:absolute inset-x-0 -bottom-20 justify-end">
                        <SectionBubble 
                            align="left"
                            className="max-md:!rounded-none max-md:w-full max-md:max-w-none max-md:!items-center"
                            title="Renovations" 
                            text="Let’s breath new life into your home and bring out all its potencial. Let’s start a chat and dream up a great remodel. ">
                        </SectionBubble>
                    </div>
                    <div className="relative overflow-hidden w-full h-full -z-50">
                        <Image image={images.BIG_IMG_1} imgClassName="w-full"/>
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row md:h-[500px] mt-52 mb-36 bg-gradient-to-r from-white from-10% to-[#E1E1E1] to-90%">
                <div className="relative w-full md:w-1/2 ps-10 -translate-y-28 ">
                    <div className="w-full md:w-7/12 grid flex-col justify-contnet-end align-items-end">
                        <Title type="h1" className="text-[200px] text-[#555555] leading-none justify-self-start flex md:justify-self-end font-extrabold" text="12" /> 
                        <Title type="h2" className="text-[50px] text-[#555555] md:text-end ms-6 md:ms-0 leading-none justify-self-start flex md:justify-self-end" text="years" />
                        <Title type="h2" className="text-[50px] text-[#555555] md:text-end ms-10 md:ms-0 leading-none justify-self-start flex md:justify-self-end"  text="building dreams" />
                    </div>
                </div>
                <div className="relative flex items-end justify-end  md:w-1/2">
                    <div className="w-full md:w-auto md:me-72 md:mb-10">
                        <div className="w-4/5 md:w-auto ms-3 md:ms-0 md:ps-20">
                            <ReferralQuote text="The team was very professional and friendly. They delivered exactly what i was looking for. I love my new home."></ReferralQuote>
                        </div>
                        <div className="-translate-x-10 md:-translate-x-0 w-4/5 md:w-auto my-4 md:my-0">
                            <ReferralName title="Ana Silva" subtitle="Home owner"></ReferralName>
                        </div>
                    </div>
                    <Image image={images.HOMEPAGE_PERSON} className="absolute bottom-0 right-0 w-1/2 md:w-auto" imgClassName="w-full me-0"/>
                </div>
            </section>
            <section className="flex justify-center my-36">
                <ContactBlock title='Let’s start a conversation!' text='Get in touch for any questions you may have and we’ll work together to find the best solution.'/>
            </section>
        </div>
    )
    
}