"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
];

const supportLinks = [
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    const handleFooterClick = (e, href) => {
        e.preventDefault();
        if (pathname !== "/") {
            router.push(`/${href}`);
            return;
        }
        const target = document.querySelector(href);
        if (target) {
            const navbarHeight = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-[#3F2C20] text-white">

            <div className="mycontainer py-14 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">

                    {/* Brand Column — bilkul waisa hi rakho */}
                    <div className="lg:w-[280px] shrink-0">
                        <h3 className="text-white text-[24px] font-bold mb-3">HomeAprovment</h3>
                        <p className="text-[#F2D4C2] text-[16px] leading-[1.7] max-w-[300px]">
                            Creating sanctuary-level home improvements since 2008. Licensed,
                            insured, and dedicated to timeless craftsmanship.
                        </p>
                        <div className="flex gap-5 mt-6">
                            <a
                                href="https://www.instagram.com/alinumaan35/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F2D4C2] text-[14px] hover:text-white transition-colors duration-200"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://github.com/numaan750"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F2D4C2] text-[14px] hover:text-white transition-colors duration-200"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/im-numaan-ali/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F2D4C2] text-[14px] hover:text-white transition-colors duration-200"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 lg:flex-1 lg:justify-end">

                        {/* Quick Links — pehle "Services" column tha, ab section links hain */}
                        <div className="lg:w-[200px]">
                            <p className="text-white text-[14px] uppercase tracking-[0.15em] font-semibold mb-4">
                                Quick Links
                            </p>
                            <ul className="space-y-2.5">
                                {quickLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleFooterClick(e, item.href)}
                                            className="text-[#F2D4C2] text-[16px] hover:text-white transition-colors duration-200 cursor-pointer"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company — abhi ke liye placeholder, neeche note dekho */}
                        <div className="lg:w-[200px]">
                            <p className="text-white text-[14px] uppercase tracking-[0.15em] font-semibold mb-4">
                                Company
                            </p>
                            <ul className="space-y-2.5">
                                {["About Us", "Careers", "Sustainability", "Partners"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-[#F2D4C2] text-[16px] hover:text-white transition-colors duration-200">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="lg:w-[200px]">
                            <p className="text-white text-[14px] uppercase tracking-[0.15em] font-semibold mb-4">
                                Support
                            </p>
                            <ul className="space-y-2.5">
                                {supportLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleFooterClick(e, item.href)}
                                            className="text-[#F2D4C2] text-[16px] hover:text-white transition-colors duration-200 cursor-pointer"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <Link href="/privacy-policy" className="text-[#F2D4C2] text-[16px] hover:text-white transition-colors duration-200">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="border-t border-[#3D2510]" />

            <div className="mycontainer py-5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[#F2D4C2] text-[13px]">
                        © 2024 NestCraft Home Improvement. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/terms-and-conditions" className="text-[#F2D4C2] text-[13px] hover:text-white transition-colors duration-200">
                            Terms of Service
                        </Link>
                        <Link href="/privacy-policy" className="text-[#F2D4C2] text-[13px] hover:text-white transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <a href="#" className="text-[#F2D4C2] text-[13px] hover:text-white transition-colors duration-200">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
}