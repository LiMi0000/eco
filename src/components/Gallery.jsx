import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection({
    // title = "Galeria",
    // description = "Shfletoni disa nga momentet dhe aktivitetet tona.",
    images = [],
}) {
    const [index, setIndex] = useState(0);
    const startX = useRef(null);

    const safeImages = useMemo(() => {
        return Array.isArray(images) ? images.filter(Boolean) : [];
    }, [images]);

    const hasImages = safeImages.length > 0;

    const prev = () => {
        if (!hasImages) return;
        setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
    };

    const next = () => {
        if (!hasImages) return;
        setIndex((i) => (i + 1) % safeImages.length);
    };

    // Keyboard navigation (desktop)
    useEffect(() => {
        const onKeyDown = (e) => {
            if (!hasImages) return;
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasImages, safeImages.length]);

    // Swipe (mobile)
    const onTouchStart = (e) => {
        startX.current = e.touches?.[0]?.clientX ?? null;
    };

    const onTouchEnd = (e) => {
        const endX = e.changedTouches?.[0]?.clientX ?? null;
        if (startX.current == null || endX == null) return;

        const diff = endX - startX.current;
        if (Math.abs(diff) < 40) return;

        if (diff > 0) prev();
        else next();

        startX.current = null;
    };

    return (
        <section id="gallery" className="bg-white">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* <div className="flex items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {title}
                        </h2>
                        <p className="mt-2 text-gray-600">{description}</p>
                    </div>
                </div> */}

                <div className="mt-10">
                    {!hasImages ? (
                        <div className="rounded-2xl bg-gray-50 p-10 text-gray-600">
                            No images yet.
                        </div>
                    ) : (
                        <div
                            className="relative overflow-hidden rounded-2xl bg-black/5"
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                        >
                            <img
                                src={safeImages[index].src}
                                alt={safeImages[index].alt || `Gallery image ${index + 1}`}
                                className="w-full h-[240px] sm:h-[360px] md:h-[460px] object-cover"
                                loading="lazy"
                            />

                            {/* Desktop arrows INSIDE the image */}
                            <div className="hidden md:block">
                                <button
                                    type="button"
                                    onClick={prev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 backdrop-blur border border-gray-200 hover:border-green-500 flex items-center justify-center"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft />
                                </button>

                                <button
                                    type="button"
                                    onClick={next}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 backdrop-blur border border-gray-200 hover:border-green-500 flex items-center justify-center"
                                    aria-label="Next image"
                                >
                                    <ChevronRight />
                                </button>
                            </div>

                            {/* Counter (all screens) */}
                            <div className="absolute bottom-3 right-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-800 border border-gray-200">
                                {index + 1} / {safeImages.length}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}