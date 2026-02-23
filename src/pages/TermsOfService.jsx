import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
    return (
        <div className="bg-[#166534] text-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="mb-12">
                    <Link
                        to="/#footer"
                        className="text-lg font-medium text-white"
                    >
                        <ArrowLeft className="inline mr-2" size={20} />
                        Mbrapa
                    </Link>
                </div>
                <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

                <p className="mb-6 text-white leading-7">
                    By using this website, you agree to comply with the following terms
                    and conditions.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">Use of Content</h2>
                <p className="text-white leading-7 mb-6">
                    All content on this website is for informational and educational
                    purposes only. Unauthorized reproduction is prohibited.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">External Links</h2>
                <p className="text-white leading-7 mb-6">
                    Our website may contain links to third-party websites. We are not
                    responsible for their content or privacy practices.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">Changes to Terms</h2>
                <p className="text-white leading-7">
                    We reserve the right to update these terms at any time without prior notice.
                </p>
            </div>
        </div>
    );
}