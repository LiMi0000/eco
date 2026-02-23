import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';


export default function PrivacyPolicy() {
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
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

                <p className="mb-6 text-white leading-7">
                    Eco Learning School respects your privacy. This website is a public
                    informational platform and does not require user registration or account creation.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">Personal Data</h2>
                <p className="text-white leading-7 mb-6">
                    We do not collect, store, or process personal data through this website.
                    No login, user profiles, or tracking systems are implemented.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">Cookies</h2>
                <p className="text-white leading-7 mb-6">
                    This website does not use cookies for tracking or marketing purposes.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-3">External Links</h2>
                <p className="text-white leading-7">
                    The website may contain links to external platforms (such as social media).
                    We are not responsible for the privacy practices of those third-party websites.
                </p>

                <p className="mt-10 text-sm text-white">
                    Last updated: {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}