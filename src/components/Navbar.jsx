import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t("nav.about"), href: "#about" },
        { name: t("nav.events"), href: "#events" },
        { name: t("nav.blog"), href: "#blog" },
        { name: t("nav.contact"), href: "#contact" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">

                        {/* <Leaf className="h-6 w-6 text-white" /> */}
                        <img src="/new-logo.png" className='w-16 h-16 mt-2' alt="" />

                        <span className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white lg:text-white'}`}>Eco Learning School</span>
                    </div>

                    <div className="fixed top-11 right-16 md:hidden z-50">
                        <LanguageSelector />
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center justify-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-md text-md font-medium transition-colors ${scrolled
                                        ? 'text-gray-700 hover:text-green-600'
                                        : 'text-white hover:text-green-200'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <LanguageSelector />
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md  ${scrolled ? 'text-gray-800' : 'text-gray-800 lg:text-white'}`}
                        >
                            <Menu className={`h-6 w-6 ${scrolled ? 'text-black' : 'text-white'}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-[#16a34a] flex items-center justify-center md:hidden">

                    {/* Close Button */}
                    <X onClick={() => setIsOpen(false)} className={`h-6 w-6 absolute top-6 right-6 text-white hover:text-green-600`} />

                    {/* Centered Menu */}
                    <div className="flex flex-col items-center space-y-20">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-semibold text-white hover:text-green-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
