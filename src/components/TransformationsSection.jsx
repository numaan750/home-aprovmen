'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const projects = [
    {
        tag: 'AFTER',
        image: '/images/Serene-Spa-Bath.png',
        location: 'Oak Park Residence',
        title: 'Serene Spa Bath',
        desc: 'Master Bathroom Overhaul',
        investment: '$32k Investment',
        hoverTitle: 'Spa-Like Serenity',
        hoverDesc: 'Heated floors, soaking tub & custom dual vanities.',
        popupTitle: 'Your Private Spa Retreat',
        popupDesc: 'Master Bathroom Renovation',
        details: 'Full gut renovation featuring heated marble floors, a freestanding soaking tub, dual custom vanities, LED ambient lighting, and designer tilework — every detail crafted for daily luxury.',
    },
    {
        tag: 'AFTER',
        image: '/images/Open-Concept-Living.png',
        location: 'Willow Creek Estate',
        title: 'Open-Concept Living',
        desc: 'Structural Wall Removal & Interior Design',
        investment: '$85k Investment',
        hoverTitle: 'Walls Come Down',
        hoverDesc: 'Structural removal for an airy, open-plan layout.',
        popupTitle: 'Living Without Limits',
        popupDesc: 'Open-Plan Transformation',
        details: 'Load-bearing wall removal with full structural engineering, custom steel beam installation, seamless flooring continuity, and a complete interior redesign connecting kitchen, dining, and living in one breathtaking space.',
    },
    {
        tag: 'AFTER',
        image: '/images/Serene-Spa-Bath.png',
        location: 'Maple Grove Home',
        title: 'Modern Kitchen Revamp',
        desc: 'Full Kitchen Renovation & Cabinetry',
        investment: '$54k Investment',
        hoverTitle: 'Culinary Upgrade',
        hoverDesc: 'Custom cabinetry, quartz counters & pro appliances.',
        popupTitle: 'The Kitchen You Deserve',
        popupDesc: 'Chef-Level Kitchen Remodel',
        details: 'Custom shaker cabinetry floor to ceiling, waterfall quartz countertops, professional-grade range and hood, a statement kitchen island, hidden pantry, and warm pendant lighting throughout.',
    },
    {
        tag: 'AFTER',
        image: '/images/Open-Concept-Living.png',
        location: 'Riverside Loft',
        title: 'Luxury Bedroom Suite',
        desc: 'Master Bedroom & Walk-in Closet Design',
        investment: '$41k Investment',
        hoverTitle: 'A Suite Escape',
        hoverDesc: 'Walk-in closet, accent wall & premium hardwood floors.',
        popupTitle: 'Sleep in Pure Luxury',
        popupDesc: 'Master Suite Redesign',
        details: 'A full master suite transformation with a custom walk-in closet system, upholstered feature wall, integrated ambient and task lighting, premium engineered hardwood flooring, and floor-to-ceiling blackout draping.',
    },
]

export default function TransformationsSection() {
    const [selected, setSelected] = useState(null)
    const scrollRef = useRef(null)
    const animationRef = useRef(null)
    const isPausedRef = useRef(false)
    const positionRef = useRef(0)

    const handleProjectStart = () => {
        setSelected(null)

        setTimeout(() => {
            const section = document.querySelector('#contact')
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }, 200)
    }

    useEffect(() => {
        if (selected) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [selected])

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') setSelected(null)
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    useEffect(() => {
        const container = scrollRef.current
        if (!container) return

        const speed = 1.2

        const animate = () => {
            if (!isPausedRef.current) {
                positionRef.current += speed
                const half = container.scrollWidth / 2
                if (positionRef.current >= half) {
                    positionRef.current = 0
                }
                container.scrollLeft = positionRef.current
            }
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [])

    return (
        <>
            <section className="w-full bg-[#3F2C20] py-12 sm:py-16 md:py-20">
                <div className="mycontainer">

                    <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-3 md:mb-4 leading-tight">
                            Incredible Transformations
                        </h2>
                        <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#F2D4C2] max-w-xl mx-auto leading-relaxed">
                            See how we turn outdated, cramped spaces into expansive, light-filled masterpieces.
                        </p>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-scroll pb-3 hide-scrollbar"
                        style={{ scrollBehavior: 'auto' }}
                    >
                        {[...projects, ...projects].map((project, i) => (
                            <div
                                key={i}
                                className="relative flex-shrink-0 w-[82vw] sm:w-[70vw] md:w-[calc(50%-12px)] rounded-2xl cursor-pointer snap-start"
                                onClick={() => setSelected(project)}
                                onMouseEnter={() => { isPausedRef.current = true }}
                                onMouseLeave={() => { isPausedRef.current = false }}
                            >
                                {/* Image */}
                                <div className="group relative w-full aspect-[4/3] overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[25px]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 82vw, (max-width: 768px) 70vw, 50vw"
                                    />

                                    <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#7D5233] text-white text-[10px] sm:text-[12px] font-medium px-2.5 sm:px-3 py-0.5 rounded-full uppercase tracking-wider z-10 transition-opacity duration-300 group-hover:opacity-0">
                                        {project.tag}
                                    </span>

                                    <span className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 text-white text-[11px] sm:text-[13px] md:text-[14px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full z-10 transition-opacity duration-300 group-hover:opacity-0 bg-white/15 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(255,255,255,0.1)] max-w-[60%] truncate">
                                        {project.location}
                                    </span>
                                    <div className="absolute bottom-0 left-0 right-0 h-[100%] bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-4 sm:p-5 md:p-6 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out z-20">
                                        <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-1.5">
                                            {project.hoverTitle}
                                        </h3>
                                        <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#d4c4b8] leading-relaxed">
                                            {project.hoverDesc}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-2 sm:px-3 md:px-4 pt-2.5 sm:pt-3 md:pt-3.5 pb-1 flex items-start justify-between gap-2 bg-[#3F2C20]">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-serif text-[17px] sm:text-[20px] md:text-[24px] font-bold text-white mb-0.5 truncate">
                                            {project.title}
                                        </h3>
                                        <p className="text-[12px] sm:text-[14px] md:text-[18px] text-[#a08878] line-clamp-2">
                                            {project.desc}
                                        </p>
                                    </div>
                                    <span className="text-[11px] sm:text-[13px] md:text-[16px] text-[#c4a882] font-medium whitespace-nowrap mt-0.5 flex-shrink-0">
                                        {project.investment}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {selected && (
                <div
                    className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 lg:p-10"
                    onClick={() => setSelected(null)}
                >
                    <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

                    <div
                        className="relative z-10 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-[#2A1D14] rounded-t-[24px] sm:rounded-[20px] md:rounded-[28px] overflow-hidden shadow-2xl flex flex-col lg:flex-row animate-popup max-h-[92svh] sm:max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full lg:w-[48%] aspect-[16/9] lg:aspect-auto lg:min-h-[420px] flex-shrink-0">
                            <Image
                                src={selected.image}
                                alt={selected.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 48vw"
                            />
                            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#7D5233] text-white text-[10px] sm:text-[12px] font-medium px-2.5 sm:px-3 py-0.5 rounded-full uppercase tracking-wider">
                                {selected.tag}
                            </span>
                        </div>
                        <div className="flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-10 flex-1 min-h-0 overflow-y-auto">
                            <div>
                                <span className="inline-block text-[11px] sm:text-[13px] text-[#c4a882] bg-[#3F2C20] border border-[#5a3d2b] px-3 sm:px-4 py-1 rounded-full mb-4 sm:mb-5 tracking-wide">
                                    📍 {selected.location}
                                </span>

                                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
                                    {selected.popupTitle}
                                </h2>

                                <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#a08878] mb-4 sm:mb-5 uppercase tracking-widest font-medium">
                                    {selected.popupDesc}
                                </p>

                                <div className="w-10 sm:w-12 h-[2px] bg-[#7D5233] mb-4 sm:mb-6 rounded-full" />

                                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#d4c4b8] leading-relaxed">
                                    {selected.details}
                                </p>
                            </div>

                            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                                <div className="bg-[#3F2C20] border border-[#5a3d2b] rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 flex-shrink-0">
                                    <p className="text-[10px] sm:text-[12px] text-[#a08878] uppercase tracking-widest mb-0.5">
                                        Investment
                                    </p>
                                    <p className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#c4a882] font-serif leading-none">
                                        {selected.investment.replace(' Investment', '')}
                                    </p>
                                </div>

                                <button
                                    onClick={handleProjectStart}
                                    className="bg-[#7D5233] cursor-pointer hover:bg-[#9a6442] transition-colors duration-300 text-white text-[13px] sm:text-[14px] md:text-[15px] font-medium px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 rounded-lg flex-shrink-0 text-center"
                                >
                                    Start Your Project →
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white text-base sm:text-lg leading-none"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes popupIn {
                    from {
                        opacity: 0;
                        transform: scale(0.94) translateY(16px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                /* Mobile: slide up from bottom */
                @media (max-width: 639px) {
                    @keyframes popupIn {
                        from {
                            opacity: 0;
                            transform: translateY(60px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                }
                .animate-popup {
                    animation: popupIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
            `}</style>
        </>
    )
}