import { useEffect, useState } from "react";
import { ImageListDTO } from "../integration/core/dtos/ImageList.dto";
import { Image } from "../components/Image/Image";
import { ContactBlock } from "../components/ContactBlock/ContactBlock";
import { SectionBubble } from "../components/SectionBuble/SectionBubble";
import { ReferralName } from "../components/ReferralName/ReferralName";
import { ReferralQuote } from "../components/ReferralQuote/ReferralQuote";
import { Title } from "../components/Title/Title";
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
            <section className="relative h-[500px] overflow-hidden">
                <SectionBubble 
                    align="right"
                    title="new builds" 
                    text="Dream it & we’ll design it. From the conception stages all the way to choosing your finishes, we’ll work together with you to bring your dream home to life.">
                </SectionBubble>
                <Image image={images.BIG_IMG_3} className="absolute w-full -z-50" imgClassName="w-full h-full -translate-y-1/3" />
            </section>
            <section className="flex h-[500px]  my-40">
                <div className="relative w-1/2">
                    <div className="flex absolute inset-x-0 -bottom-20 justify-start">
                        <SectionBubble 
                            align="right"
                            title="new builds" 
                            text="Dream it & we’ll design it. From the conception stages all the way to choosing your finishes, we’ll work together with you to bring your dream home to life.">
                        </SectionBubble>
                    </div>
                    <div className="relative overflow-hidden w-full h-full -z-50">
                        <Image image={images.BIG_IMG_2}  imgClassName="w-full"/>
                    </div>
                </div>
                <div className="relative flex w-1/2">
                    <div className="flex absolute inset-x-0 -bottom-20 justify-end">
                        <SectionBubble 
                            align="left"
                            title="Renovations" 
                            text="Let’s breath new life into your home and bring out all its potencial. Let’s start a chat and dream up a great remodel. ">
                        </SectionBubble>
                    </div>
                    <div className="relative overflow-hidden w-full h-full -z-50">
                        <Image image={images.BIG_IMG_1} imgClassName="w-full"/>
                    </div>
                </div>
            </section>
            <section className="flex h-[500px] overflow-hidden my-40 bg-zinc-200">
                <div className="relative w-1/2">
                    <Title type="h1" text="12" /> 
                    <Title type="h2" text="years" />
                    <Title type="h2" text="building dreams" />
                </div>
                <div className="relative w-1/2">
                    <ReferralQuote text="The team was very professional and friendly. They delivered exactly what i was looking for. I love my new home."></ReferralQuote>
                    <ReferralName title="Ana Silva" subtitle="Home owner"></ReferralName>
                </div>
            </section>
            <section className="flex justify-center mt-10">
                <ContactBlock title='Let’s start a conversation!' text='Get in touch for any questions you may have and we’ll work together to find the best solution.'/>
            </section>
        </div>
    )
    
}