import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash, pathname, search } = useLocation();

    useEffect(() => {
        const navEntry = performance.getEntriesByType("navigation")[0];
        const navType = navEntry?.type; // "navigate" | "reload" | "back_forward" | ...

        // If user refreshed and URL contains a hash, remove it and go to top
        if (navType === "reload") {
            if (hash) {
                window.history.replaceState(null, "", `${pathname}${search}`); // remove #...
            }
            window.scrollTo({ top: 0, behavior: "auto" });
            return;
        }

        // Normal in-app navigation: scroll to the hash section if present
        if (hash) {
            const id = hash.replace("#", "");
            const el = document.getElementById(id);

            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 50);
            }
        }
    }, [hash, pathname, search]);

    return null;
}