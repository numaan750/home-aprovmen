"use client";

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const heroImages = [
    "/images/TransformYour-Home-Into-a-Sanctuary.png",
    "https://www.mgsarchitecture.in/images/Updates/2843-A-Square-1.jpg",
    "https://image.made-in-china.com/202f0j00NTdqbLsabfiP/Furniture-Sets-Leather-Modern-Bedroom-Luxury-Square-Bed-Frame-King-Size-Bed.webp",
]

const AUTO_ROTATE_INTERVAL = 4000;
const FADE_DURATION = 500;

const Hero = () => {
    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            const navbarHeight = 80;
            const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    const [activeIndex, setActiveIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % heroImages.length);
                setVisible(true);
            }, FADE_DURATION);
        }, AUTO_ROTATE_INTERVAL);

        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen bg-[#faf7f4] overflow-hidden"
        >
            <div className="pt-16 sm:pt-20 min-h-screen flex items-center">
                <div className="mycontainer py-10 sm:py-12 lg:py-0">

                    <div className="flex flex-col md:flex-row md:items-center gap-8 sm:gap-10 lg:gap-16">

                        <div className="
                            w-full
                            md:order-2
                            md:w-[45%]
                            lg:w-[44%]
                            flex-shrink-0
                        ">
                            <div className="
                                relative
                                w-full
                                aspect-[4/3]
                                sm:aspect-[16/10]
                                md:aspect-square
                                rounded-2xl
                                sm:rounded-[24px]
                                lg:rounded-[30px]
                                overflow-hidden
                                shadow-md
                            ">
                                <Image
                                    src={heroImages[activeIndex]}
                                    alt="Interior design showcase"
                                    fill
                                    className={`
                                        object-cover
                                        transition-all duration-500 ease-in-out
                                        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"}
                                    `}
                                    priority
                                />
                            </div>

                            <div className="flex justify-center gap-2 mt-3 md:mt-4">
                                {heroImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        aria-label={`Go to image ${i + 1}`}
                                        className={`
                                            h-1.5 rounded-full transition-all duration-300
                                            ${i === activeIndex
                                                ? "w-5 bg-[#7D5233]"
                                                : "w-1.5 bg-[#C4A882]"
                                            }
                                        `}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="
                            md:order-1
                            flex-1
                            flex flex-col
                            justify-center
                            text-center
                            md:text-left
                            md:pr-4
                            lg:pr-8
                        ">
                            <span className="
                                inline-block
                                self-center md:self-start
                                bg-[#FFDCC5] text-[#643E20]
                                text-[9px] sm:text-[10px]
                                tracking-widest uppercase
                                px-3 py-1
                                rounded-sm
                                mb-4 sm:mb-6
                                font-semibold
                            ">
                                Interior Design
                            </span>

                            <h1 className="
                                font-serif font-bold text-[#7D5233]
                                text-[28px]
                                sm:text-[36px]
                                lg:text-[46px]
                                xl:text-[54px]
                                leading-[1.15]
                                mb-3 sm:mb-4 lg:mb-5
                            ">
                                Transform Your Home Into a Sanctuary
                            </h1>

                            <p className="
                                text-[#51443C] leading-relaxed
                                text-[14px]
                                sm:text-[16px]
                                lg:text-[18px]
                                mb-6 sm:mb-8
                                max-w-md
                                mx-auto md:mx-0
                            ">
                                Crafting bespoke interior spaces that blend architectural
                                precision with the warmth of home. Experience high-end
                                renovation tailored to your lifestyle.
                            </p>

                            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                                <button
                                    onClick={() => scrollToSection("#contact")}
                                    className="
                                        bg-[#7D5233] text-white
                                        text-[14px] sm:text-[16px] lg:text-[17px]
                                        font-medium
                                        px-5 py-3
                                        sm:px-6 sm:py-3
                                        rounded-lg
                                        hover:bg-[#6a3326]
                                        transition-colors
                                        whitespace-nowrap
                                    "
                                >
                                    Get Free Consultation
                                </button>
                                <button
                                    onClick={() => scrollToSection("#portfolio")}
                                    className="
                                        bg-transparent text-[#7D5233]
                                        border border-[#7D5233]
                                        text-[14px] sm:text-[16px] lg:text-[17px]
                                        font-medium
                                        px-5 py-3
                                        sm:px-6 sm:py-3
                                        rounded-lg
                                        hover:bg-[#f0ece8]
                                        transition-colors
                                        whitespace-nowrap
                                    "
                                >
                                    View Our Work
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero