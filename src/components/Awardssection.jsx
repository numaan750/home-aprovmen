import { Trophy, Medal, Award } from "lucide-react";

const awards = [
    {
        icon: Trophy,
        title: "Architectural Digest",
        subtitle: "Top 50 Firms 2023",
    },
    {
        icon: Medal,
        title: "Houzz Design Award",
        subtitle: "Winner: Living Spaces",
    },
    {
        icon: Award,
        title: "National Remodeling",
        subtitle: "Craftsmanship Gold",
    },
];

export default function AwardsSection() {
    return (
        <section className=" bg-[#D5C3B9]/30">
            <div className="mycontainer">
                <div className="flex flex-row items-center justify-between gap-6 overflow-x-auto py-15 scrollbar-hide">
                    {awards.map((award, index) => {
                        const Icon = award.icon;
                        return (
                            <div
                                key={index}
                                className={`flex flex-row items-center gap-3 flex-shrink-0 min-w-[200px] sm:min-w-0 sm:flex-1 justify-center ${index !== awards.length - 1
                                    ? "border-r border-[#D5C3B9]"
                                    : ""
                                    }`}
                            >
                                <div className="flex-shrink-0">
                                    <Icon
                                        size={40}
                                        strokeWidth={1.5}
                                        className="text-[#7D5233]"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[20px] font-semibold text-[#28180D] leading-tight tracking-wide whitespace-nowrap">
                                        {award.title}
                                    </span>
                                    <span className="text-[16px] text-[#51443C] leading-tight mt-0.5 whitespace-nowrap">
                                        {award.subtitle}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}