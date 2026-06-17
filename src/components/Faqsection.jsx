"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
    {
        question: "How long does a typical kitchen renovation take?",
        answer:
            "A typical kitchen renovation takes between 6 to 12 weeks depending on the scope of work, material availability, and permit approvals. We provide a detailed timeline before work begins.",
    },
    {
        question: "Do you handle permits and inspections?",
        answer:
            "Yes, we manage all necessary permits and coordinate inspections on your behalf. Our team ensures full compliance with local building codes and regulations throughout the project.",
    },
    {
        question: "What is your service area?",
        answer:
            "We currently serve the greater metropolitan area and surrounding suburbs within a 60-mile radius. Contact us to confirm availability in your specific location.",
    },
    {
        question: "How do I get started with a renovation project?",
        answer:
            "Getting started is simple. Schedule a consultation with our team and we'll discuss your goals, budget, and timeline. From there, we'll create a customized plan and guide you through every step of the process.",
    },
    {
        question: "What types of renovation projects do you specialize in?",
        answer:
            "We specialize in kitchen remodels, bathroom renovations, basement finishing, whole-home transformations, and custom interior upgrades. Our team works closely with homeowners to deliver functional and beautifully crafted spaces.",
    },
    {
        question: "Do you provide design consultation before starting a project?",
        answer:
            "Yes, we offer professional design consultations to help define your vision, select materials, and create a plan that aligns with your lifestyle and preferences before any construction begins.",
    },
    {
        question: "How do you handle unexpected issues during renovation?",
        answer:
            "Our experienced team is trained to identify and resolve unexpected challenges quickly. We communicate transparently with you at every step, presenting clear options and solutions before proceeding with any changes.",
    },
    {
        question: "Do you work with a client's existing budget and materials?",
        answer:
            "Absolutely. We work within your budget and can incorporate existing materials or fixtures you'd like to reuse. Our goal is to maximize value while delivering results that exceed your expectations.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#FFF8F5] py-16">
            <div className="mycontainer">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[40px] font-semibold text-[#7D5233] mb-8 leading-tight">
                            Common Questions
                        </h2>

                        <div className="flex flex-col divide-y divide-[#e0d5cb]">
                            {faqs.map((faq, index) => (
                                <div key={index} className="py-4">
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex flex-row items-center justify-between gap-4 text-left"
                                    >
                                        <span className="text-[20px] font-medium text-[#28180D] leading-snug">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={20}
                                            strokeWidth={1.8}
                                            className={`text-[#28180D] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                            ? "max-h-[200px] opacity-100 mt-3"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-[16px] text-[#614f40] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:self-start lg:sticky lg:top-8">
                        <div className="w-full aspect-square relative rounded-2xl overflow-hidden">                            <Image
                            src="/images/Common-Questions.png"
                            alt="Interior design workspace"
                            fill
                            className="object-cover"
                        />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}