import { useEffect, useMemo, useRef, useState } from "react";
import Flag from "react-world-flags";
import i18n from "i18next";

export default function LanguageSelector() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    // Add/adjust languages here
    const languages = useMemo(
        () => ({
            sq: { label: "SQ", country: "AL" }, // Albania
            mk: { label: "MK", country: "MK" }, // North Macedonia
            en: { label: "EN", country: "GB" }, // or "US"
        }),
        []
    );

    // Current lang from i18next (normalize like "en-US" -> "en")
    const currentLang = (i18n.resolvedLanguage || i18n.language || "sq").split("-")[0];
    const lang = languages[currentLang] ? currentLang : "sq";

    const otherLanguages = Object.entries(languages).filter(([code]) => code !== lang);

    const handleChange = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative z-50 flex justify-end mt-4">
            <div className="relative w-10 h-auto">
                <div className="absolute -top-8 right-1 flex flex-col items-center">
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="w-10 h-10 rounded-full overflow-hidden shadow-md bg-white z-20 ring-1 ring-black/10 hover:ring-green-500 transition"
                        aria-label="Change language"
                        type="button"
                    >
                        <Flag code={languages[lang].country} className="w-full h-full object-cover" />
                    </button>

                    <div className="flex flex-col items-center mt-2 space-y-2">
                        {otherLanguages.map(([code, { country }], index) => (
                            <button
                                key={code}
                                onClick={() => handleChange(code)}
                                className={`
                  w-10 h-10 rounded-full overflow-hidden shadow-sm bg-white
                  ring-1 ring-black/10 hover:ring-green-500 transition
                  transform transition-all duration-300 ease-out
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                `}
                                style={{ transitionDelay: `${(index + 1) * 75}ms` }}
                                aria-label={`Switch to ${code.toUpperCase()}`}
                                type="button"
                            >
                                <Flag code={country} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}