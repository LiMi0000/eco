import React, { useEffect, useState } from "react";

function useCountUp(target, duration = 1200) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let raf;
        const start = performance.now();

        const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));

            if (progress < 1) {
                raf = requestAnimationFrame(animate);
            }
        };

        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);

    return value;
}

function Stat({ value, label, suffix }) {
    const count = useCountUp(value);

    return (
        <div className="text-center px-6">
            <div className="text-5xl md:text-6xl font-extrabold text-green-600 tracking-tight">
                {count.toLocaleString()}
                {suffix}
            </div>
            <p className="mt-3 text-lg text-gray-700 font-medium">{label}</p>
        </div>
    );
}

export default function Impact() {
    return (
        <section id="impact" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Real Impact. Real Numbers.
                    </h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Sustainability isn’t just an idea — it’s something we measure,
                        improve, and celebrate together as a community.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                sm:divide-x sm:divide-gray-200">

                    <Stat value={80} suffix="%" label="Waste Reduced" />
                    <Stat value={420} suffix="+" label="Trees Planted" />
                    <Stat value={1200} suffix="+" label="Outdoor Learning Hours" />
                    <Stat value={95} suffix="%" label="Student Participation" />

                </div>
            </div>
        </section>
    );
}