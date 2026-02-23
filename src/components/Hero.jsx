import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg"
                    alt="Children learning in nature"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
                <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-400 text-green-100 text-sm font-semibold mb-6 backdrop-blur-sm">
                    Edukimi i Gjeneratës së Ardhshme
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                    Me edukim, <br className="hidden sm:block" />
                    <span className="text-green-400">Për një të ardhme të shëndetshme</span>
                </h1>
                <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                    Ne kombinojmë përsosmërinë akademike me kujdesin ndaj mjedisit për të përgatitur nxënësit për një botë të qëndrueshme.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#about" className="px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                        Misioni jonë <ArrowRight className="h-5 w-5" />
                    </a>
                    {/* <a href="#contact" className="px-8 py-4 bg-white text-green-800 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                        Schedule a Visit
                    </a> */}
                </div>
            </div>

            <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
                <a href="#about" className="text-white opacity-70 hover:opacity-100 transition-opacity">
                    <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </a>
            </div>
        </div>
    );
};
