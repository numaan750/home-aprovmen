import React from "react";

const steps = [
  {
    id: "01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8B5E3C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="7" y1="8" x2="17" y2="8" />
        <line x1="7" y1="12" x2="17" y2="12" />
        <line x1="7" y1="16" x2="13" y2="16" />
      </svg>
    ),
    label: "Consultation",
    description: "We discuss your vision, budget, and lifestyle needs in detail.",
  },
  {
    id: "02",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8B5E3C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L8 8H3l4 4-2 6 7-4 7 4-2-6 4-4h-5L12 2z" />
      </svg>
    ),
    label: "Planning",
    description:
      "Detailed blueprints and 3D renderings to visualize the result.",
  },
  {
    id: "03",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8B5E3C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
      </svg>
    ),
    label: "Materials",
    description: "Curation of premium samples from our exclusive network.",
  },
  {
    id: "04",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8B5E3C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    label: "Renovation",
    description: "Meticulous construction led by our master craftsmen.",
  },
  {
    id: "05",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8B5E3C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    label: "Walkthrough",
    description: "The final reveal and our quality assurance sign-off.",
  },
];

export default function PathToPerfection() {
  return (
    <section className="w-full bg-[#FFF8F5] py-[80px]">
      <div className="mycontainer">
        <div className="text-center mb-[60px]">
          <h2 className="text-[40px] font-normal text-[#7D5233] leading-[1.2] mb-[16px]">
            The Path to Perfection
          </h2>
          <p className="text-[18px] text-[#51443C] leading-[1.6] max-w-[600px] mx-auto">
            Our proven 5-step framework ensures every project is delivered on
            time, on budget, and exactly as imagined.
          </p>
        </div>

        <div className="overflow-x-auto pb-[8px]">
          <div className="flex min-w-[680px] lg:min-w-0 lg:grid lg:grid-cols-5 gap-0">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1 px-[12px]">
                <div className="w-[80px] h-[80px] rounded-full bg-[#FBDDCA] flex items-center justify-center mb-[28px] flex-shrink-0">
                  {step.icon}
                </div>

                <div className="w-full flex items-center mb-[20px] relative">
                  <div
                    className={`flex-1 h-[1px] ${
                      index === 0 ? "bg-transparent" : "bg-[#D9C5B8]"
                    }`}
                  />
                  <div className="w-[8px] h-[8px] rounded-full bg-[#D9C5B8] flex-shrink-0" />
                  <div
                    className={`flex-1 h-[1px] ${
                      index === steps.length - 1
                        ? "bg-transparent"
                        : "bg-[#D9C5B8]"
                    }`}
                  />
                </div>

                <p className="text-[14px] tracking-[0.12em] uppercase text-[#A07A60] mb-[6px] font-normal">
                  Step {step.id}
                </p>

                <h3 className="text-[18px] font-bold text-[#3B1F0E] mb-[10px] text-center">
                  {step.label}
                </h3>

                <p className="text-[14px] text-[#6B4C38] text-center leading-[1.6]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}