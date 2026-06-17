// components/TrustSection.tsx

import Image from 'next/image'
import { CheckCircle, Star } from 'lucide-react'

const features = [
    {
        title: 'Transparent Fixed Pricing',
        desc: 'No hidden fees or unexpected costs. We provide detailed estimates you can rely on.',
    },
    {
        title: 'On-Time Completion',
        desc: 'We value your time. Our project management ensures strict adherence to timelines.',
    },
    {
        title: 'Award-Winning Design',
        desc: 'Our team stays ahead of trends to bring you contemporary yet timeless solutions.',
    },
    {
        title: 'Full Project Management',
        desc: "From permits to final cleanup, we handle every logistical detail so you don't have to.",
    },
]

export default function TrustSection() {
    return (
        <section className="w-full bg-[#FFF1EA] py-[80px]">
            <div className="mycontainer flex flex-col lg:flex-row items-stretch gap-[40px]">

                <div className="w-full lg:w-[50%] flex flex-col justify-center">
                    <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#7D5233] leading-tight mb-[40px]">
                        Why Homeowners Trust<br />HomeAprovment
                    </h2>

                    <div className="flex flex-col gap-[28px]">
                        {features.map((item, i) => (
                            <div key={i} className="flex items-start gap-[14px]">
                                <div className="mt-[8px] shrink-0">
                                    <CheckCircle
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-[#44664B]"
                                    />
                                </div>
                                <div>
                                    <p className="text-[20px] font-semibold text-[#28180D] mb-[4px]">
                                        {item.title}
                                    </p>
                                    <p className="text-[18px] text-[#51443C] leading-relaxed md:max-w-[500px]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-[50%] relative">
                    <div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
                        <Image
                            src="/images/Why-Homeowners-Trust-NestCraft.png"
                            alt="Homeowner trusting NestCraft"
                            fill
                            className="object-cover rounded-[12px]"
                            priority
                        />

                        <div className="absolute top-[16px] right-[-20px] bg-white rounded-[10px] px-[14px] py-[10px] shadow-md flex items-center gap-[10px]">
                            <div className="flex gap-[2px]">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="text-[#f5a623] fill-[#f5a623]"
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="text-[12px] font-semibold text-[#3b2a1a] leading-none">
                                    4.9 Google Rating
                                </p>
                                <p className="text-[10px] text-[#9e8e82] mt-[2px]">
                                    from 288 reviews
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-[16px] left-[-20px] bg-white rounded-[10px] px-[14px] py-[10px] shadow-md flex items-center gap-[10px]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#FFEADE] flex items-center justify-center shrink-0">
                                <CheckCircle size={16} strokeWidth={1.5} className="text-[#7D5233]" />
                            </div>
                            <div>
                                <p className="text-[12px] font-semibold text-[#3b2a1a] leading-none">
                                    Licensed & Insured
                                </p>
                                <p className="text-[10px] text-[#9e8e82] mt-[2px]">
                                    State Registered #4402
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}