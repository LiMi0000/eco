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
        <div ref={containerRef} className="relative z-50">
            {/* Main button */}
            <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full overflow-hidden shadow-md bg-white"
                type="button"
                aria-label="Open language selector"
            >
                <Flag code={languages[lang].country} className="w-full h-full object-cover" />
            </button>

            {/* Other flags: UP on mobile, DOWN on desktop */}
            <div
                className={`
      absolute right-0 flex flex-col items-center space-y-2
      bottom-full mb-2
      md:bottom-auto md:top-full md:mt-2 md:mb-0
      ${open ? "pointer-events-auto" : "pointer-events-none"}
    `}
            >
                {otherLanguages.map(([code, { country }], index) => (
                    <button
                        key={code}
                        onClick={() => handleChange(code)}
                        className={`
          w-10 h-10 rounded-full overflow-hidden shadow-sm bg-white
          ring-1 ring-black/10 hover:ring-green-500
          transform transition-all duration-300 ease-out
          ${open
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-2 md:-translate-y-2"
                            }
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
    );
}