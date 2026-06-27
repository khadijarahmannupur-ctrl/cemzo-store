"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "shadow-lg backdrop-blur-md bg-[#0A2947]/95 dark:bg-[#F3E4C9]/95"
                    : "bg-[#0A2947] dark:bg-[#F3E4C9]"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F3E4C9] dark:bg-[#0A2947] flex items-center justify-center">
                        <svg
                            className="w-4 h-4 text-[#0A2947] dark:text-[#F3E4C9]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                    </div>
                    <span className="font-bold text-lg tracking-tight text-[#F3E4C9] dark:text-[#0A2947]">
                        Cemzo<span className="text-[#D3D4C0] dark:text-[#8B5E3C]">Store</span>
                    </span>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-[#F3E4C9] dark:text-[#0A2947] hover:bg-[#F3E4C9]/10 dark:hover:bg-[#0A2947]/10 transition-colors"
                        >
                            {theme === "dark" ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}