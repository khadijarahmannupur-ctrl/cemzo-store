"use client";

export default function CategoryFilter({ categories, active, onChange }) {
    return (
        <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => {
                const isActive = active === cat;
                const label = cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1);

                return (
                    <button
                        key={cat}
                        onClick={() => onChange(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${isActive
                                ? "bg-[#0A2947] dark:bg-[#F3E4C9] text-[#F3E4C9] dark:text-[#0A2947] border-[#0A2947] dark:border-[#F3E4C9] shadow-sm"
                                : "bg-transparent text-[#0A2947] dark:text-[#F3E4C9] border-[#D3D4C0] dark:border-[#F3E4C9]/15 hover:border-[#8B5E3C] hover:text-[#8B5E3C] dark:hover:text-[#8B5E3C]"
                            }`}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}