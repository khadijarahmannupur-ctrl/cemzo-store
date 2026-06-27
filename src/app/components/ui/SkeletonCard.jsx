export default function SkeletonCard() {
    return (
        <div className="rounded-2xl bg-[#D3D4C0]/40 dark:bg-[#F3E4C9]/5 border border-[#D3D4C0] dark:border-[#F3E4C9]/10 p-4 flex flex-col gap-3 animate-pulse">
            <div className="h-48 rounded-xl bg-[#D3D4C0] dark:bg-[#F3E4C9]/10" />
            <div className="h-3 rounded-full bg-[#D3D4C0] dark:bg-[#F3E4C9]/10 w-1/3" />
            <div className="h-4 rounded-full bg-[#D3D4C0] dark:bg-[#F3E4C9]/10 w-full" />
            <div className="h-4 rounded-full bg-[#D3D4C0] dark:bg-[#F3E4C9]/10 w-3/4" />
            <div className="flex justify-between mt-auto pt-2">
                <div className="h-5 rounded-full bg-[#D3D4C0] dark:bg-[#F3E4C9]/10 w-1/4" />
                <div className="h-5 rounded-full bg-[#D3D4C0] dark:bg-[#F3E4C9]/10 w-1/5" />
            </div>
        </div>
    );
}