"use client";

import { useState } from "react";

const projectTypes = [
    "Kitchen Remodel",
    "Bathroom Renovation",
    "Living Room Redesign",
    "Bedroom Makeover",
    "Full Home Renovation",
    "Office Space",
    "Outdoor / Patio",
    "Other",
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "Kitchen Remodel",
        vision: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async () => {
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    projectType: "Kitchen Remodel",
                    vision: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submit error:", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const isFormValid =
        formData.firstName.trim() !== "" &&
        formData.lastName.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.vision.trim() !== "";

    return (
        <section className="bg-[#FFF8F5] flex items-center justify-center py-16">
            <div className="mycontainer flex flex-col lg:flex-row items-center lg:items-center gap-10">

                <div className="flex-1 w-full text-left">
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.1] text-[#7D5233]">
                        Let&apos;s Build Your
                        Dream Space
                        Together
                    </h2>

                    <p className="mt-6 text-[#51443C] text-[16px] sm:text-[18px] leading-relaxed max-w-[500px]">
                        Ready to begin your transformation? Schedule a complimentary design
                        consultation today and take the first step toward a home you&apos;ll
                        love forever.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-8">
                        <div>
                            <p className="text-[16px] tracking-[0.15em] text-[#7D5233] font-semibold mb-1">
                                Email us
                            </p>
                            <a
                                href="mailto:hello@nestcraft.design"
                                className="text-[#28180D] text-[18px] font-medium hover:text-[#c0733f] transition-colors duration-200"
                            >
                                alinumaan35@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="text-[16px] tracking-[0.15em] text-[#7D5233] font-semibold mb-1">
                                Call us
                            </p>
                            <a
                                href="tel:+92 3365370090"
                                className="text-[#28180D] text-[18px] font-medium hover:text-[#c0733f] transition-colors duration-200"
                            >
                                +92 3365370090
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="bg-white rounded-[30px] shadow-[0_8px_40px_rgba(0,0,0,0.08)] px-8 py-10 sm:px-10 sm:py-12 w-full">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-[12px] tracking-[0.13em] text-[#51443C] font-semibold mb-1.5">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="your first name..."
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border border-[#D5C3B9] rounded-[10px] px-3.5 py-2.5 text-sm text-[#28180D] placeholder-[#c4b5ab] focus:outline-none focus:border-[#D5C3B9] focus:ring-1 focus:ring-[#D5C3B9] transition-colors duration-150 bg-[#FFF8F5]"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-[12px] tracking-[0.13em] text-[#51443C] font-semibold mb-1.5">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="your last name..."
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border border-[#D5C3B9] rounded-[10px] px-3.5 py-2.5 text-sm text-[#28180D] placeholder-[#c4b5ab] focus:outline-none focus:border-[#D5C3B9] focus:ring-1 focus:ring-[#D5C3B9] transition-colors duration-150 bg-[#FFF8F5]"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-[12px] tracking-[0.13em] text-[#51443C] font-semibold mb-1.5">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email...."
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-[#D5C3B9] rounded-[10px] px-3.5 py-2.5 text-sm text-[#28180D] placeholder-[#c4b5ab] focus:outline-none focus:border-[#D5C3B9] focus:ring-1 focus:ring-[#D5C3B9] transition-colors duration-150 bg-[#FFF8F5]"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-[12px] tracking-[0.13em] text-[#51443C] font-semibold mb-1.5">
                                Project Type
                            </label>
                            <div className="relative">
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full appearance-none border border-[#D5C3B9] rounded-[10px] px-3.5 py-2.5 text-sm text-[#28180D] focus:outline-none focus:border-[#D5C3B9] focus:ring-1 focus:ring-[#D5C3B9] transition-colors duration-150 bg-[#FFF8F5] cursor-pointer"
                                >
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center">
                                    <svg
                                        className="w-4 h-4 text-[#28180D]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-[12px] tracking-[0.13em] text-[#51443C] font-semibold mb-1.5">
                                Tell Us About Your Vision
                            </label>
                            <textarea
                                name="vision"
                                placeholder="Tell us about your dream space..."
                                value={formData.vision}
                                onChange={handleChange}
                                rows={4}
                                className="w-full border border-[#D5C3B9] rounded-[10px] px-3.5 py-2.5 text-sm text-[#28180D] placeholder-[#c4b5ab] focus:outline-none focus:border-[#D5C3B9] focus:ring-1 focus:ring-[#D5C3B9] transition-colors duration-150 bg-[#FFF8F5] resize-none"
                            />
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={loading || !isFormValid}
                            className="mt-6 w-full bg-[#7D5233] cursor-pointer active:bg-[#7D5233] text-white text-[16px] font-semibold tracking-wide py-3 rounded-[10px] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send Request"}
                        </button>
                        {status === "success" && (
                            <p className="mt-3 text-sm text-green-600 text-center">
                                Thank you! Your message has been sent.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="mt-3 text-sm text-red-600 text-center">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}