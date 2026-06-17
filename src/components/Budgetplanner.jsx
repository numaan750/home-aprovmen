"use client";

import React, { useState } from "react";

const rooms = [
    { label: "Full Kitchen Remodel", base: 15000, max: 22500 },
    { label: "Bathroom Renovation", base: 8000, max: 14000 },
    { label: "Living Room Makeover", base: 6000, max: 11000 },
    { label: "Bedroom Redesign", base: 5000, max: 9500 },
    { label: "Full Home Renovation", base: 40000, max: 75000 },
];

const finishMultipliers = {
    Standard: 0.8,
    Premium: 1.0,
    Luxury: 1.4,
};

function formatCurrency(value) {
    return "$" + value.toLocaleString("en-US");
}

export default function BudgetPlanner() {
    const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
    const [area, setArea] = useState(250);
    const [finish, setFinish] = useState("Premium");

    const multiplier = finishMultipliers[finish];
    const areaFactor = area / 250;

    const low = Math.round((selectedRoom.base * multiplier * areaFactor) / 500) * 500;
    const high = Math.round((selectedRoom.max * multiplier * areaFactor) / 500) * 500;

    const sliderPercent = ((area - 50) / 950) * 100;
    const handleQuoteClick = () => {
        const section = document.querySelector("#contact");

        if (section) {
            const navbarHeight = 80;

            const top =
                section.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="w-full bg-[#FAF6F2] py-[80px]">
            <div className="mycontainer">
                <div className="flex flex-col lg:flex-row rounded-[30px] overflow-hidden shadow-sm">
                    <div className="flex-1 bg-[#FFF1EA] px-[40px] py-[48px]">
                        <p className="text-[12px] tracking-[0.14em] uppercase text-[#7D5233] mb-[10px]">
                            Quick Estimate
                        </p>
                        <h2 className="font-serif text-[40px] font-normal text-[#7D5233] leading-[1.2] mb-[8px]">
                            Budget Planner
                        </h2>
                        <p className="text-[18px] text-[#51443C] mb-[40px] leading-[1.6]">
                            Get a ballpark figure for your project in seconds.
                        </p>
                        <div className="mb-[32px]">
                            <label className="block text-[12px] tracking-[0.12em] uppercase text-[#51443C] mb-[10px]">
                                Select Room
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedRoom.label}
                                    onChange={(e) => {
                                        const found = rooms.find((r) => r.label === e.target.value);
                                        if (found) setSelectedRoom(found);
                                    }}
                                    className="w-full appearance-none bg-white border border-[#DDD0C8] rounded-[8px] px-[16px] py-[13px] text-[16px] text-[#28180D] cursor-pointer focus:outline-none focus:border-[#7A4F38] pr-[40px]"
                                >
                                    {rooms.map((r) => (
                                        <option key={r.label} value={r.label}>
                                            {r.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#28180D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[36px]">
                            <div className="flex items-center justify-between mb-[10px]">
                                <label className="text-[12px] tracking-[0.12em] uppercase text-[#51443C]">
                                    Area (Sq Ft)
                                </label>
                                <span className="text-[16px] font-semibold text-[#7D5233]">
                                    {area}
                                </span>
                            </div>
                            <input
                                type="range"
                                min={50}
                                max={1000}
                                step={10}
                                value={area}
                                onChange={(e) => setArea(Number(e.target.value))}
                                className="w-full h-[3px] appearance-none rounded-full cursor-pointer budget-slider"
                                style={{
                                    background: `linear-gradient(to right, #7A4F38 0%, #7A4F38 ${sliderPercent}%, #DDD0C8 ${sliderPercent}%, #DDD0C8 100%)`,
                                }}
                            />
                        </div>
                        <div>
                            <label className="block text-[12px] tracking-[0.12em] uppercase text-[#51443C] mb-[12px]">
                                Finish Level
                            </label>
                            <div className="flex gap-[8px]">
                                {["Standard", "Premium", "Luxury"].map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFinish(f)}
                                        className={`flex-1 py-[10px] rounded-[8px] text-[13px] font-medium border transition-all duration-200 cursor-pointer
                                            ${finish === f
                                                ? "bg-[#FFDCC5] border-[#7D5233] text-[#7D5233"
                                                : "bg-white border-[#DDD0C8] text-[#6B4C38] hover:border-[#A07A60]"
                                            }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative flex-1 px-[40px] py-[48px] flex flex-col justify-center items-center overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/074/180/328/small/modern-living-room-interior-with-distressed-concrete-wall-comfortable-armchair-and-natural-light-photo.jpg')",
                            }}
                        />
                        <div className="absolute inset-0 bg-[#7D5233]/70" />
                        <div className="relative z-10 flex flex-col justify-center items-center">
                            <p className="text-[12px] tracking-[0.14em] uppercase text-white mb-[20px]">
                                Estimated Investment
                            </p>
                            <h3 className="font-serif text-[42px] lg:text-[60px] font-normal text-white leading-[1.1] mb-[20px]">
                                {formatCurrency(low)} – {formatCurrency(high)}
                            </h3>
                            <p className="text-[14px] text-[#E8D5C4] leading-[1.7] mb-[40px] max-w-[400px] text-center">
                                This estimate includes premium materials, labor, and basic project management fees.
                            </p>
                            <div>
                                <button
                                    onClick={handleQuoteClick}
                                    className="px-[28px] py-[13px] rounded-lg border border-white text-white text-[13px] font-medium tracking-[0.04em] bg-transparent hover:bg-white hover:text-[#7A4F38] transition-all duration-200 cursor-pointer"
                                >
                                    Request Detailed Quote
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}