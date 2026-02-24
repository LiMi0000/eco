import React from 'react';
import { Leaf, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from "react-i18next";


export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-center">

                    {/* Left - Description */}
                    <div>
                        <p className="text-sm text-gray-400 mb-6 max-w-sm text-center">
                            {t("footer.footerDescription")}
                        </p>

                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Center - Logo */}
                    <div className="flex flex-col items-center text-center justify-center">
                        <img src="/eco-logo-rmvbg.png" alt="Eco Logo" className="w-64 h-64 object-contain" />
                    </div>

                    {/* Right - Quick Links */}
                    <div className="md:text-right">
                        <h4 className="text-white font-bold mb-4">{t("footer.quickLinks")}</h4>
                        <ul className="space-y-2 text-md">
                            <li><a href="#" className="hover:text-green-500 transition-colors">{t("nav.home")}</a></li>
                            <li><a href="#about" className="hover:text-green-500 transition-colors">{t("nav.about")}</a></li>
                            <li><a href="#events" className="hover:text-green-500 transition-colors">{t("nav.events")}</a></li>
                            <li><a href="#blog" className="hover:text-green-500 transition-colors">{t("nav.blog")}</a></li>
                            <li><a href="#contact" className="hover:text-green-500 transition-colors">{t("nav.contact")}</a></li>
                            {/* <li><a href="faq" className="hover:text-green-500 transition-colors">FAQ</a></li> */}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Eco Learning School. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
