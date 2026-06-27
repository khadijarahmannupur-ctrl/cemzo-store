"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState("");
    const debounced = useDebounce(input, 350);

    useEffect(() => {
        onSearch(debounced);
    }, [debounced, onSearch]);

    return (
        <div className="relative w-full max-w-md">
            {/* Search icon */}
            <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B5E3C]"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search products…"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#D3D4C0] dark:border-[#F3E4C9]/15 bg-white/60 dark:bg-[#F3E4C9]/5 text-[#0A2947] dark:text-[#F3E4C9] placeholder-[#8B5E3C]/50 dark:placeholder-[#F3E4C9]/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]/30 focus:border-[#8B5E3C] transition-all"
            />

            {/* Clear button */}
            {input && (
                <button
                    onClick={() => setInput("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B5E3C]/60 hover:text-[#8B5E3C] transition-colors"
                    aria-label="Clear search"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
}