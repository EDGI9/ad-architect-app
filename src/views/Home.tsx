import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
import { RouterPaths } from "../router/RouterPaths";

export function Home(): JSX.Element {
    //@ts-ignore
    let [images, setImages] = useState<ImageListDTO>({})
    let person = useRef();
    let personSection = useRef();
    let personNameBubble = useRef();
    let personQuoteBubble = useRef();
    let personSlogan = useRef();
    let leftPictureBubble = useRef();
    let rightPictureBubble = useRef();
    let personSectionObserver: IntersectionObserver;
    let personNameBubbleObserver: IntersectionObserver;
    let personQuoteBubbleObserver: IntersectionObserver;
    let leftPictureBubbleObserver: IntersectionObserver;
    let rightPictureBubbleObserver: IntersectionObserver;
    let baseAnimationClasses: string[] = ['transition', 'ease-in-out', 'duration-300'];

    async function getImages() {
        const imagesList:ImageListDTO = await Services.Images.getAllImages()
        setImages(imagesList)
    }
    

    personSectionObserver = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        personSlogan.current.classList.add(...baseAnimationClasses, 'delay-200');
        person.current.classList.add(...baseAnimationClasses, 'delay-300');
        if (entry.isIntersecting) {
            person.current.classList.add('-translate-x-0');
            person.current.classList.remove('translate-x-full'); 

            personSlogan.current.classList.add('translate-x-0');
            personSlogan.current.classList.remove('-translate-x-full'); 
        } else {
            person.current.classList.add('translate-x-full'); 
            person.current.classList.remove('-translate-x-0'); 

            personSlogan.current.classList.add('-translate-x-full'); 
            personSlogan.current.classList.remove('translate-x-0'); 
        }
    });

    personQuoteBubbleObserver = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        entry.target.classList.add(...baseAnimationClasses, 'delay-500');
        if (entry.isIntersecting) {
            entry.target.classList.add('-translate-x-100');
            entry.target.classList.remove('translate-x-10', 'opacity-0'); 
        } else {
            entry.target.classList.add('translate-x-10','opacity-0'); 
            entry.target.classList.remove('-translate-x-100'); 
        }
    });

    personNameBubbleObserver = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        entry.target.classList.add(...baseAnimationClasses, 'delay-300');
        if (entry.isIntersecting) {
            entry.target.classList.add('md:-translate-x-5');
            entry.target.classList.remove('translate-x-52', 'opacity-0'); 
        } else {
            entry.target.classList.add('translate-x-52','opacity-0'); 
            entry.target.classList.remove('md:-translate-x-5'); 
        }
        
    });

    leftPictureBubbleObserver = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        entry.target.classList.add(...baseAnimationClasses, 'delay-150');
        if (entry.isIntersecting) {
            entry.target.classList.add('translate-x-0');
            entry.target.classList.remove('-translate-x-1/2', 'opacity-0'); 
        } else {
            entry.target.classList.add('-translate-x-1/2','opacity-0'); 
            entry.target.classList.remove('translate-x-0'); 
        }
    });

    rightPictureBubbleObserver = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        entry.target.classList.add(...baseAnimationClasses, 'delay-300');
        if (entry.isIntersecting) {
            entry.target.classList.add('translate-x-0');
            entry.target.classList.remove('translate-x-1/2', 'opacity-0'); 
        } else {
            entry.target.classList.add('translate-x-1/2','opacity-0'); 
            entry.target.classList.remove('translate-x-0'); 
        }
        
    });

      
    useEffect(() => {
        getImages()
        //@ts-ignore
        personSectionObserver.observe(personSection.current);
        //@ts-ignore
        personNameBubbleObserver.observe(personNameBubble.current);
        //@ts-ignore
        personQuoteBubbleObserver.observe(personQuoteBubble.current);
        //@ts-ignore
        leftPictureBubbleObserver.observe(leftPictureBubble.current);
        //@ts-ignore
        rightPictureBubbleObserver.observe(rightPictureBubble.current);
    },[])
    
    return (
        <div>
            <section className="relative md:flex md:h-[600px] overflow-hidden">
                <Card backgroundColor="" className="bg-white md:bg-[#ECAE85]/20 backdrop-blur-sm w-full md:w-1/2 md:max-w-xl my-10 rounded-lg max-md:p-0 max-md:flex max-md:flex-col max-md:items-center">
                    <Title type="h1" text="We’re here to help you build your dream home" className="text-6xl max-md:px-11"/> 
                    <Image image={images.BIG_IMG_3} className="md:hidden w-full -z-50 max-md:py-11" imgClassName="w-full h-full md:-translate-y-1/3" />
                    <p className="py-5 max-md:px-11 max-md:text-center">Whether you’re looking for a bachelor pad or a family home for twelve, we’ll work with you to bring your dream home to life.</p>
                    <Link to={RouterPaths.CONTACT_US.path}>
                        <Button text="Get in touch"></Button>
                    </Link>
                </Card>
                <Image image={images.BIG_IMG_3} className="max-md:hidden absolute w-full -z-50" imgClassName="w-full h-full md:-translate-y-1/3" />
            </section>
            <section className="flex flex-col md:flex-row md:h-[500px]  my-40">
                <div className="relative w-full md:w-1/2">
                    <div className="flex md:absolute inset-x-0 -bottom-20 justify-start" ref={leftPictureBubble}>
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
                    <div className="flex md:absolute inset-x-0 -bottom-20 justify-end" ref={rightPictureBubble}>
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
            <section className="flex flex-col md:flex-row md:h-[500px] mt-52 mb-36 bg-gradient-to-r from-white from-10% to-[#E1E1E1] to-90%" ref={personSection}>
                <div className="relative w-full md:w-1/2 ps-10 -translate-y-28 ">
                    <div className="w-full md:w-7/12 grid flex-col justify-contnet-end align-items-end" ref={personSlogan}>
                        <Title type="h1" className="text-[200px] text-[#555555] leading-none justify-self-start flex md:justify-self-end font-extrabold" text="12" /> 
                        <Title type="h2" className="text-[50px] text-[#555555] md:text-end ms-6 md:ms-0 leading-none justify-self-start flex md:justify-self-end" text="years" />
                        <Title type="h2" className="text-[50px] text-[#555555] md:text-end ms-10 md:ms-0 leading-none justify-self-start flex md:justify-self-end"  text="building dreams" />
                    </div>
                </div>
                <div className="relative flex items-end justify-end  md:w-1/2" >
                    <div className="w-full md:w-auto md:me-72 md:mb-10">
                        <div className="w-4/5 md:w-auto ms-3 md:ms-0 md:ps-20" ref={personQuoteBubble}>
                            <ReferralQuote text="The team was very professional and friendly. They delivered exactly what i was looking for. I love my new home."></ReferralQuote>
                        </div>
                        <div className="md:-translate-x-0 w-4/5 md:w-auto my-4 md:my-0" ref={personNameBubble}>
                            <ReferralName title="Ana Silva" subtitle="Home owner"></ReferralName>
                        </div>
                    </div>
                    <div ref={person} className="absolute bottom-0 right-0 w-1/2 md:w-auto">
                        <Image  image={images.HOMEPAGE_PERSON} imgClassName="w-full me-0"/>
                    </div>
                </div>
            </section>
            <section className="flex justify-center my-36">
                <ContactBlock title='Let’s start a conversation!' text='Get in touch for any questions you may have and we’ll work together to find the best solution.'/>
            </section>
        </div>
    )
    
}