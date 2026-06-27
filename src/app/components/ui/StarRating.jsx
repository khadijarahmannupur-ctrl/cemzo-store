export default function StarRating({ rate, count }) {
    const full = Math.floor(rate);
    const half = rate - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
        <div className="flex items-center gap-1.5">
            <div className="flex">
                {Array(full).fill(0).map((_, i) => (
                    <StarIcon key={`f${i}`} type="full" />
                ))}
                {half && <StarIcon type="half" />}
                {Array(empty).fill(0).map((_, i) => (
                    <StarIcon key={`e${i}`} type="empty" />
                ))}
            </div>
            <span className="text-xs text-[#8B5E3C] dark:text-[#D3D4C0]">({count})</span>
        </div>
    );
}

function StarIcon({ type }) {
    if (type === "full")
        return (
            <svg className="w-3.5 h-3.5 text-[#8B5E3C]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        );
    if (type === "half")
        return (
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20">
                <defs>
                    <linearGradient id="half-grad">
                        <stop offset="50%" stopColor="#8B5E3C" />
                        <stop offset="50%" stopColor="#D3D4C0" />
                    </linearGradient>
                </defs>
                <path fill="url(#half-grad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        );
    return (
        <svg className="w-3.5 h-3.5 text-[#D3D4C0] dark:text-[#F3E4C9]/20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}