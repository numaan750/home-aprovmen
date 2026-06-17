"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Kitchen Remodeling",
    desc: "Gourmet layouts and custom cabinetry designed for the heart of your home.",
    href: "#",
    details:
      "Our kitchen remodeling service reimagines your cooking space from the ground up — from layout planning and custom cabinetry to premium countertops and high-end appliance integration. We balance functionality with timeless design so your kitchen becomes the true heart of your home.",
    related: [
      "Custom Cabinetry & Storage Solutions",
      "Countertop Installation (Quartz, Granite, Marble)",
      "Kitchen Island Design & Build",
      "Lighting & Electrical Upgrades",
      "Plumbing & Fixture Updates",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 3h14a2 2 0 0 1 2 2v4H3V5a2 2 0 0 1 2-2z" />
        <path d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
        <path d="M10 14h4" />
      </svg>
    ),
    title: "Bathroom Renovation",
    desc: "Transform your daily routine into a spa-like experience with premium fixtures.",
    href: "#",
    details:
      "Our bathroom renovation service turns ordinary bathrooms into spa-inspired retreats. We handle everything from tile selection and waterproofing to walk-in showers, soaking tubs, and modern vanity installations — combining comfort, function, and premium finishes.",
    related: [
      "Walk-In Shower & Tub Installation",
      "Vanity & Countertop Upgrades",
      "Tile & Waterproofing Work",
      "Heated Flooring Systems",
      "Ventilation & Lighting Improvements",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 18v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
        <path d="M7 10V8a5 5 0 0 1 10 0v2" />
      </svg>
    ),
    title: "Living Room Redesign",
    desc: "Curating sophisticated spaces that balance elegance with ultimate comfort.",
    href: "#",
    details:
      "We craft living spaces that feel both elegant and effortlessly comfortable — refining furniture layouts, lighting schemes, wall treatments, and built-in storage to create a room that truly reflects your lifestyle.",
    related: [
      "Custom Built-In Shelving & Storage",
      "Accent Wall & Wall Treatments",
      "Lighting Design & Fixture Installation",
      "Flooring Refinishing",
      "Furniture Layout Planning",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 7h18M6 7V3h12v4M4 21V11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
      </svg>
    ),
    title: "Flooring & Tiling",
    desc: "Expertly installed hardwood, stone, and artisan tiles for timeless durability.",
    href: "#",
    details:
      "From hardwood and engineered wood to natural stone and artisan tile, our flooring team handles precise installation, leveling, and finishing for floors that are as durable as they are beautiful.",
    related: [
      "Hardwood Flooring Installation",
      "Stone & Tile Installation",
      "Subfloor Repair & Leveling",
      "Grout & Sealing Services",
      "Heated Floor Installation",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M9 21V9l3-6 3 6v12" />
        <circle cx="18" cy="8" r="3" />
        <path d="M18 11v10" />
      </svg>
    ),
    title: "Exterior & Landscaping",
    desc: "Enhancing curb appeal and creating outdoor oases for your sanctuary.",
    href: "#",
    details:
      "We elevate curb appeal and outdoor living with thoughtful landscaping, hardscaping, deck and patio construction, and exterior finishing — turning your yard into a true extension of your home.",
    related: [
      "Deck & Patio Construction",
      "Garden & Landscape Design",
      "Outdoor Lighting Installation",
      "Fencing & Privacy Solutions",
      "Exterior Painting & Siding",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Smart Home Upgrades",
    desc: "Seamless integration of modern technology into traditional aesthetics.",
    href: "#",
    details:
      "We seamlessly blend modern smart-home technology into your home's existing aesthetic — covering smart lighting, climate control, security systems, and integrated automation for everyday convenience.",
    related: [
      "Smart Lighting & Switch Installation",
      "Smart Thermostat & Climate Control",
      "Home Security & Camera Systems",
      "Voice Assistant & Automation Setup",
      "Networking & Wi-Fi Optimization",
    ],
  },
];

export default function ExpertCraftsmanship() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className="bg-[#FFF8F5] py-14 sm:py-16 md:py-20">
      <div className="mycontainer">

        <div className="max-w-full mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#7D5233] leading-tight mb-4">
            Expert Craftsmanship for Every Room
          </h2>
          <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#51443C] leading-relaxed md:max-w-[600px]">
            From initial concept to final walkthrough, we manage every detail of your
            home's transformation with surgical precision and artistic care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(i);
                }
              }}
              className="flex flex-col p-6 sm:p-7 lg:p-8 bg-white rounded-2xl border border-orange-100 group shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer outline-none"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFDCC5] text-[#7D5233] flex items-center justify-center mb-6 sm:mb-7 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#28180D] mb-3">
                {service.title}
              </h3>
              <p className="flex-1 text-[16px] sm:text-[17px] lg:text-[18px] text-[#51443C] leading-relaxed mb-6 sm:mb-7">
                {service.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#7D5233] transition-all duration-200 group-hover:gap-3">
                Learn More
                <span className="text-[14px]">→</span>
              </span>
            </div>
          ))}
        </div>

      </div>
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" style={{ animation: "fadeIn 0.2s ease-out" }} />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl sm:rounded-3xl w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl"
            style={{ animation: "scaleIn 0.25s ease-out" }}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFF8F5] hover:bg-[#FFDCC5] text-[#7D5233] flex items-center justify-center transition-colors z-10"
            >
              ✕
            </button>

            <div className="overflow-y-auto hide-scrollbar max-h-[85vh] p-6 sm:p-8 md:p-10">              <div className="w-14 h-14 rounded-xl bg-[#FFDCC5] text-[#7D5233] flex items-center justify-center mb-6">
              {services[selected].icon}
            </div>

              <h3 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#28180D] mb-4">
                {services[selected].title}
              </h3>

              <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#51443C] leading-relaxed mb-7">
                {services[selected].details}
              </p>

              <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#7D5233] uppercase tracking-wide mb-4">
                Related Services
              </h4>
              <ul className="space-y-3 mb-8">
                {services[selected].related.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#51443C]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7D5233] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setSelected(null);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 rounded-xl bg-[#7D5233] text-white text-[15px] font-medium hover:bg-[#6a4429] transition-colors"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}