import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Vision() {
    const pillars = [
        {
            title: "Misioni",
            desc: "Të promovojë edukimin ekologjik, efikasitetin energjetik për një (dhe) stabilitet socio-ekonomik, në të gjitha nivelet e shoqërisë, duke rritur ndërgjegjësimin dhe veprimin për mbrojtjen e mjedisit dhe ndërtimin e një të ardhmeje të qëndrueshme.",
            items: ["Solar + smart metering", "Efficiency upgrades", "Low-emission transport"],
        },
        {
            title: "Vizioni",
            desc: "Një shoqëri e informuar dhe aktive që vepron në harmoni me natyrën dhe i përcjell brezave të ardhshëm një mjedis të pastër, të gjelbër dhe të shëndetshëm.",
            items: ["Project-based curriculum", "Outdoor classrooms", "Mentorship & teamwork"],
        },
        {
            title: "Qëllimet",
            desc: `
            Të ofrojë edukim ekologjik si dhe kujdes energjetik për të gjitha grupmoshat, përmes seminareve, punëtorive, aktiviteteve praktike dhe materialeve arsimore.
            Të ndërgjegjësojë popullatën mbi rëndësinë e ruajtjes së natyrës dhe ndikimin e veprimeve njerëzore në mjedis.
            `,
            items: ["Tree planting program", "Pollinator zones", "Habitat mapping"],
        },
        {
            title: "Veprimtaria",
            desc: `
            Organizim të trajnimeve, seminareve dhe punëtorive;
        	Aksione ekologjike (pastrim, mbjellje pemësh, etj.);
        	Publikim të materialeve edukative;
            Hulumtime dhe projekte në fushën e ekologjisë dhe efikasitetit energjetik;
        	Pjesëmarrje dhe organizim të fushatave ndërgjegjësuese;
            `,
            items: ["Monthly workshops", "Community cleanups", "Local partnerships"],
        },
    ];

    const milestones = [
        { year: "2026", text: "Launch student eco-labs and expand the community garden." },
        { year: "2027", text: "Increase renewable energy coverage and reduce waste even further." },
        { year: "2028", text: "Create a regional model for outdoor, sustainability-first learning." },
    ];

    return (
        <section id="vision" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Vizioni për të Ardhmen
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Ne synojmë të ndërtojmë një shoqëri të ndërgjegjësuar dhe të përgjegjshme ndaj mjedisit, ku edukimi shërben si themel për zhvillim të qëndrueshëm, inovacion dhe bashkëpunim afatgjatë.
                    </p>
                </div>

                {/* Pillars */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((p) => (
                        <div
                            key={p.title}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                                <span className="h-10 w-10 rounded-xl bg-green-50 border border-green-100 grid place-items-center">
                                    <ArrowUpRight className="h-5 w-5 text-green-700" />
                                </span>
                            </div>

                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.desc}</p>

                            {/* <ul className="mt-5 space-y-2 text-sm text-gray-700">
                                {p.items.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    ))}
                </div>

                {/* Milestones */}
                {/* <div className="mt-14 rounded-3xl bg-stone-50 border border-stone-200 p-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Our roadmap</h3>
                            <p className="mt-2 text-gray-600">
                                Clear milestones to keep our vision practical, measurable, and community-driven.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
                        >
                            Partner with us
                        </a>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {milestones.map((m) => (
                            <div
                                key={m.year}
                                className="rounded-2xl bg-white border border-gray-200 p-6"
                            >
                                <div className="text-sm font-bold text-green-700">{m.year}</div>
                                <p className="mt-2 text-gray-700 leading-relaxed">{m.text}</p>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
}