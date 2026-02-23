import React from 'react';
import { Leaf, Sun, BookOpen, Users } from 'lucide-react';

export const About = () => {
    const features = [
        {
            icon: <Leaf className="h-6 w-6 text-green-600" />,
            title: "Edukimi ekologjik",
            description: "Të gjithë edukatorët dhe nxënësit e arsimit fillor dhe të mesëm,vlerësues të jashtëm, shërbime profesionale të pedagogëve dhe psikologëve dhe të tjerë."
        },
        {
            icon: <Sun className="h-6 w-6 text-orange-500" />,
            title: "Efikasitetin energjetik",
            description: `përfaqëson zhvillimin energjetik që plotëson nevojat e së tashmes pa kompromentuar aftësinë e brezave të ardhshëm për të përmbushur nevojat e tyre.`
        },
        {
            icon: <BookOpen className="h-6 w-6 text-blue-600" />,
            title: "Stabilitet socio-ekonomik",
            description: `Cilat konsiderohen përfitimet kryesore të fillimit dhe të shndërrimit në një eko-shkollë?
            Përfitimet shëndetësore, social,
            Ruajtja e burimeve natyrore,
            Ruajtja e biodiversitetit,
            Kontributi për një planet më të mirë.
            `
        },
        {
            icon: <Users className="h-6 w-6 text-purple-600" />,
            title: "Zhvillim i qëndrueshëm",
            description: "Një edukim që ofron njohuri dhe ndërgjegjësim për zhvillimin e qëndrueshëm dhe zhvillon aftësitë dhe kompetencat e jetës; qëndrimet dhe vlerat që i duhen një qytetari për të marrë pjesë në veprime dhe është në gjendje të marrë vendime që kontribuojnë drejt zhvillimit të qëndrueshëm."
        }
    ];

    return (
        <section id="about" className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Edukimi për një të Ardhme të Qëndrueshme</h2>
                    <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Në Eco Learning School, ne ndërtojmë një kulturë arsimore që ndërthur dijen, përgjegjësinë dhe veprimin. Synimi ynë është të formojmë individë të vetëdijshëm, të aftë për të kontribuar në mbrojtjen e mjedisit dhe zhvillimin e qëndrueshëm të shoqërisë.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-green-200 rounded-2xl z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-stone-200 rounded-2xl z-0"></div>
                        <img
                            src="https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg"
                            alt="Students planting in garden"
                            className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl"
                        />
                        <div className="absolute bottom-8 right-8 z-20 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden sm:block">
                            <p className="text-green-800 font-bold text-lg">"Mjedisi nuk është pronë e jona, por përgjegjësi e përbashkët."</p>
                            {/* <p className="text-gray-500 text-sm mt-1">- Wendell Berry</p> */}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-stone-100">
                                <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
