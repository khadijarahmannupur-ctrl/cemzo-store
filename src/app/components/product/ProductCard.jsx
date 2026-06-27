"use client";

import Image from "next/image";
import StarRating from "../ui/StarRating";

export default function ProductCard({ product, onClick }) {
    const { title, price, category, image, rating } = product;

    return (
        <article
            onClick={onClick}
            className="group cursor-pointer rounded-2xl bg-[#F3E4C9] dark:bg-[#0A2947] border border-[#D3D4C0] dark:border-[#F3E4C9]/10 p-4 flex flex-col gap-3 hover:shadow-xl hover:shadow-[#0A2947]/10 dark:hover:shadow-[#F3E4C9]/5 hover:-translate-y-1.5 transition-all duration-250"
        >
            {/* Image area */}
            <div className="relative h-48 rounded-xl bg-[#D3D4C0]/30 dark:bg-[#F3E4C9]/5 flex items-center justify-center overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain p-5 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
            </div>

            {/* Category badge */}
            <span className="self-start text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#0A2947]/10 dark:bg-[#F3E4C9]/10 text-[#0A2947] dark:text-[#F3E4C9]">
                {category}
            </span>

            {/* Title */}
            <h3 className="text-sm font-medium text-[#0A2947] dark:text-[#F3E4C9] line-clamp-2 leading-snug flex-1">
                {title}
            </h3>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-[#D3D4C0] dark:border-[#F3E4C9]/10">
                <span className="text-base font-bold text-[#8B5E3C]">
                    ${price.toFixed(2)}
                </span>
                <StarRating rate={rating.rate} count={rating.count} />
            </div>
        </article>
    );
}