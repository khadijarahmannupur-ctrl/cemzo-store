"use client";

import SkeletonCard from "../ui/SkeletonCard";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, loading, error, onSelect }) {

    if (loading) return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)}
        </div>
    );

    if (error) return (
        <div className="flex flex-col items-center justify-center py-28 gap-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#8B5E3C]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B5E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <p className="font-medium text-[#0A2947] dark:text-[#F3E4C9]">Something went wrong</p>
            <p className="text-sm text-[#8B5E3C]">{error}</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-1 px-5 py-2 rounded-xl bg-[#0A2947] dark:bg-[#F3E4C9] text-[#F3E4C9] dark:text-[#0A2947] text-sm font-medium hover:opacity-90 transition-opacity"
            >
                Try again
            </button>
        </div>
    );

    if (products.length === 0) return (
        <div className="flex flex-col items-center justify-center py-28 gap-3 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#D3D4C0]/50 dark:bg-[#F3E4C9]/5 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B5E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <p className="font-semibold text-[#0A2947] dark:text-[#F3E4C9]">No products found</p>
            <p className="text-sm text-[#8B5E3C]">Try a different search or category</p>
        </div>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} onClick={() => onSelect(p)} />
            ))}
        </div>
    );
}