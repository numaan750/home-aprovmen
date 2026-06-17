"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const categories = ["All Projects", "Kitchens", "Bathrooms", "Living Spaces"];

const allProjects = [
    {
        id: 1,
        category: "All Projects",
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
        alt: "Green kitchen cabinets with marble backsplash",
    },
    {
        id: 2,
        category: "All Projects",
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
        alt: "White tiled bathroom shower",
    },
    {
        id: 3,
        category: "All Projects",
        src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
        alt: "Modern dining area with pendant lights",
    },
    {
        id: 4,
        category: "All Projects",
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        alt: "Minimalist living room with wooden shelves",
    },
    {
        id: 5,
        category: "All Projects",
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
        alt: "Attic bedroom with wooden beams",
    },
    {
        id: 6,
        category: "All Projects",
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
        alt: "Bright open kitchen interior",
    },

    {
        id: 7,
        category: "Kitchens",
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
        alt: "Green kitchen with brass fixtures",
    },
    {
        id: 8,
        category: "Kitchens",
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
        alt: "Open plan kitchen",
    },
    {
        id: 9,
        category: "Kitchens",
        src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
        alt: "Modern kitchen with island",
    },
    {
        id: 10,
        category: "Kitchens",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        alt: "White kitchen with wooden accents",
    },
    {
        id: 11,
        category: "Kitchens",
        src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
        alt: "Dark cabinetry luxury kitchen",
    },
    {
        id: 12,
        category: "Kitchens",
        src: "https://images.unsplash.com/photo-1583845112203-29329902332e?w=800&q=80",
        alt: "Minimalist kitchen design",
    },

    {
        id: 13,
        category: "Bathrooms",
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
        alt: "White shower with gold fixtures",
    },
    {
        id: 14,
        category: "Bathrooms",
        src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
        alt: "Freestanding bathtub",
    },
    {
        id: 15,
        category: "Bathrooms",
        src: "https://www.jkath.com/wp-content/uploads/2020/10/10-BATHROOM-REMODEL-DESIGN-IDEAS-.jpeg",
        alt: "Spa-style bathroom",
    },
    {
        id: 16,
        category: "Bathrooms",
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        alt: "Marble bathroom vanity",
    },
    {
        id: 17,
        category: "Bathrooms",
        src: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&q=80",
        alt: "Modern bathroom with dark tiles",
    },
    {
        id: 18,
        category: "Bathrooms",
        src: "https://images.homedepot-static.com/lifestyleimages/640x426/446162d6-a33d-45b2-8946-dfa6a609cbfc3.jpeg",
        alt: "Luxury ensuite bathroom",
    },

    {
        id: 19,
        category: "Living Spaces",
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        alt: "Cozy living room with bookshelves",
    },
    {
        id: 20,
        category: "Living Spaces",
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
        alt: "Attic bedroom with vaulted ceiling",
    },
    {
        id: 21,
        category: "Living Spaces",
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        alt: "Modern sofa in bright living room",
    },
    {
        id: 22,
        category: "Living Spaces",
        src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
        alt: "Scandinavian living room interior",
    },
    {
        id: 23,
        category: "Living Spaces",
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
        alt: "Minimalist bedroom with natural light",
    },
    {
        id: 24,
        category: "Living Spaces",
        src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
        alt: "Elegant bedroom with white linen",
    },
];

const AUTO_ROTATE_INTERVAL = 4000;
const FADE_DURATION = 500;

export default function PortfolioOfDreams() {
    const [activeCategory, setActiveCategory] = useState("All Projects");
    const [visible, setVisible] = useState(true);
    const intervalRef = useRef(null);

    const goToCategory = (nextCat) => {
        setVisible(false);
        setTimeout(() => {
            setActiveCategory(nextCat);
            setVisible(true);
        }, FADE_DURATION);
    };

    const startAutoRotate = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveCategory((prev) => {
                const currentIndex = categories.indexOf(prev);
                const nextIndex = (currentIndex + 1) % categories.length;
                const nextCat = categories[nextIndex];
                setVisible(false);
                setTimeout(() => setVisible(true), FADE_DURATION);
                return nextCat;
            });
        }, AUTO_ROTATE_INTERVAL);
    };

    useEffect(() => {
        startAutoRotate();
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleManualClick = (cat) => {
        goToCategory(cat);
        startAutoRotate();
    };

    const filtered = allProjects.filter(
        (p) => p.category === activeCategory
    );

    return (
        <section className="w-full bg-[#FFF8F5] py-[80px]">
            <div className="mycontainer">

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-[24px] mb-[48px]">
                    <div className="max-w-[600px]">
                        <h2 className="font-serif text-[40px] font-normal text-[#7D5233] leading-[1.2] mb-[12px]">
                            A Portfolio of Dreams
                        </h2>
                        <p className="text-[18px] text-[#51443C] leading-[1.7]">
                            Explore our curated collection of luxury transformations across the
                            region.
                        </p>
                    </div>

                    <div className="flex items-start lg:items-center">
                        <div className="hidden lg:flex items-center gap-[10px] flex-wrap">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleManualClick(cat)}
                                    className={`px-[18px] py-[9px] rounded-full text-[13px] font-normal border transition-all duration-200 cursor-pointer
                                       ${activeCategory === cat
                                            ? "bg-[#7D5233] border-[#7D5233] text-white"
                                            : "bg-transparent border-[#C4A899] text-[#6B4C38] hover:border-[#7A4F38] hover:text-[#3B1F0E]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="lg:hidden w-full">
                            <select
                                value={activeCategory}
                                onChange={(e) => handleManualClick(e.target.value)}
                                className="w-full px-[16px] py-[10px] rounded-full border border-[#C4A899] bg-white text-[#3B1F0E] text-[14px] appearance-none cursor-pointer focus:outline-none focus:border-[#7A4F38]"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div
    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] transition-all duration-500 ease-in-out ${
        visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.98] translate-y-[6px]"
    }`}
>
                    {filtered.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-[12px] overflow-hidden bg-[#EDE3DC]"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={project.src}
                                    alt={project.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}