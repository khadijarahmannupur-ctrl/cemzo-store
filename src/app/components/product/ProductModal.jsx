"use client";

import { useEffect } from "react";
import Image from "next/image";
import StarRating from "../ui/StarRating";

export default function ProductModal({ product, onClose }) {
    // Close on Escape key
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    // Lock body scroll
    useEffect(() => {
        if (product) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [product]);

    if (!product) return null;

    const { title, description, price, category, image, rating } = product;

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">

            {/* Backdrop */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-[#0A2947]/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
            />

            {/* Modal panel */}
            <div className="relative z-10 w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-[#F3E4C9] dark:bg-[#0A2947] shadow-2xl animate-[slideUp_0.25s_ease-out]">

                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#D3D4C0]/60 dark:bg-[#F3E4C9]/10 flex items-center justify-center text-[#0A2947] dark:text-[#F3E4C9] hover:bg-[#D3D4C0] dark:hover:bg-[#F3E4C9]/20 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col sm:flex-row">

                    {/* Image */}
                    <div className="sm:w-2/5 h-64 sm:h-auto min-h-[240px] relative bg-[#D3D4C0]/30 dark:bg-[#F3E4C9]/5 rounded-t-3xl sm:rounded-l-2xl sm:rounded-tr-none flex-shrink-0">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain p-10"
                            sizes="(max-width: 640px) 100vw, 40vw"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 p-6 sm:p-8 flex-1">

                        {/* Category badge */}
                        <span className="self-start text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#0A2947]/10 dark:bg-[#F3E4C9]/10 text-[#0A2947] dark:text-[#F3E4C9]">
                            {category}
                        </span>

                        {/* Title */}
                        <h2 className="font-bold text-xl leading-snug text-[#0A2947] dark:text-[#F3E4C9]">
                            {title}
                        </h2>

                        {/* Rating */}
                        <StarRating rate={rating.rate} count={rating.count} />

                        {/* Description */}
                        <p className="text-sm text-[#0A2947]/70 dark:text-[#F3E4C9]/60 leading-relaxed">
                            {description}
                        </p>

                        {/* Footer */}
                        <div className="mt-auto pt-5 border-t border-[#D3D4C0] dark:border-[#F3E4C9]/10 flex items-center justify-between gap-4">
                            <span className="text-2xl font-bold text-[#8B5E3C]">
                                ${price.toFixed(2)}
                            </span>
                            <button className="flex-1 max-w-[180px] py-2.5 rounded-xl bg-[#0A2947] dark:bg-[#F3E4C9] text-[#F3E4C9] dark:text-[#0A2947] text-sm font-semibold hover:opacity-90 active:scale-95 transition-all">
                                Add to cart
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}