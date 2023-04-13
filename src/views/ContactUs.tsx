import { PageTitle } from "../components/PageTitle/PageTitle";
import { Card } from "../components/Card/Card";
import { Form } from "../components/Form/Form";
import { Title } from "../components/Title/Title";
import { Image } from "../components/Image/Image";
import { images } from "../__mock__/images";

export function ContactUs(): JSX.Element {

    return (
        <div>
            <section className="flex justify-start my-16 text-sm">
                <PageTitle text="Contact us"/>
            </section>
            <section className="flex justify-center mt-28 ">
                <Card backgroundColor="#E1E1E1" className="w-screen flex justify-center items-center md:items-start flex-col lg:flex-row-reverse lg:space-x-12 px-0 pb-60 overflow-hidden">
                    <div className="z-10 w-full flex justify-center bg-white lg:bg-transparent">
                        <div className="lg:w-auto">
                            <Form />
                        </div>
                    </div>
                    <div className="relative mt-10 flex">
                        <div className="relative z-10 text-white flex flex-wrap px-5">
                            <div className="w-full md:w-1/2 lg:w-full order-1">
                                <Title 
                                    type="h2" 
                                    text="Chat to us" 
                                    className="font-bold" />
                                <p>Our friendly team is here to help.</p>
                                <p className="font-bold">hello@adarchitects.com</p>
                            </div>
                            <div className="w-full mt-10 order-2 md:mt-0 lg:mt-10 md:w-1/2 lg:w-full lg:order-4">
                                <Title 
                                    type="h2" 
                                    text="Call us" 
                                    className="font-bold" />
                                <p>Mon to Fri - 9am to 5pm</p>
                                <p className="font-bold">+27 888 888 8888</p>
                            </div>
                            <div className="w-full mt-20 order-3 lg:mt-10">
                                <Title 
                                    type="h2" 
                                    text="Visit us" 
                                    className="font-bold" />
                                <p>Come say hello at our offices.</p>
                                <p className="font-bold">37, Portland Avenue, Hyde Park, Johannesburg</p>
                            </div>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3582.128527087826!2d28.0286104!3d-26.127352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950cbacef6f37f%3A0xe4db27e9f1209d24!2s37%20Portland%20Ave%2C%20Craighall%20Park%2C%20Randburg%2C%202196%2C%20South%20Africa!5e0!3m2!1sen!2spt!4v1680634998052!5m2!1sen!2spt" 
                                className="mt-5 rounded-lg w-full order-4 h-56 md:h-80 lg:h-40 lg:w-96 lg:order-3"
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <Image 
                            image={images.BIG_IMG_1}
                            className="absolute top-0 z-0 contrast-[.40]" 
                            imgClassName="rounded-full scale-[3.5] sm:scale-[2] lg:scale-[1.5] -translate-x-[80%] translate-y-[10%] sm:translate-x-[0px] sm:-translate-y-[30%] lg:-translate-x-[45%] lg:translate-y-[0%]"/>
                    </div>
                </Card>
            </section>
        </div>
    )
    
}
