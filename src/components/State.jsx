const stats = [
  { number: "1,200+", label: "Hours Dedicated" },
  { number: "16+", label: "Years Experience" },
  { number: "99%", label: "Satisfaction" },
  { number: "24", label: "Senior Assets" },
  { number: "12", label: "Cities Visited" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#FFEADE] py-10">
      <div
        className="mycontainer flex flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 divide-x divide-white/10 lg:justify-center"
        style={{ scrollbarWidth: "thin" }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex-shrink-0 min-w-[300px] flex flex-col items-center justify-center text-center py-4"
          >
            <span className="text-[#7D5233] text-2xl md:text-[46px] font-semibold tracking-wide mb-1">
              {stat.number}
            </span>
            <span className="text-[#51443C] text-[16px] uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}