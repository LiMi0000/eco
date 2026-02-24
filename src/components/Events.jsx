import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import eventsData from '../data/events.json';
import { useTranslation } from "react-i18next";


export const Events = () => {
    const { t } = useTranslation();
    return (
        <section id="events" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("events.eventMainTitle")}</h2>
                        <div className="w-20 h-1.5 bg-green-500 rounded-full"></div>
                    </div>
                    {/* <a href="#" className="hidden md:flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors mt-4 md:mt-0">
                        View All Events <ArrowRight className="ml-2 h-5 w-5" />
                    </a> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsData.map((event) => (
                        <a
                            key={event.id}
                            // href={`/events/${event.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-800 uppercase tracking-wide z-10">
                                    {t(`events.event${event.id}Tag`)}
                                </div>

                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-green-600 mb-3 font-medium">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {event.date}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                    {t(`events.event${event.id}Title`)}

                                </h3>

                                <p className="text-gray-600 text-sm mb-6 flex-grow">
                                    {t(`events.event${event.id}Description`)}
                                </p>

                                <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-sm text-gray-500">
                                    <span className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                                        {t("events.eventLocation")}
                                    </span>
                                    <span>{event.time}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors">
                        View All Events <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

//    const events = [
//         {
//             id: 1,
//             title: "Eco-shkollat",
//             date: "23.01.2026",
//             time: "12:00 deri 13:00",
//             location: "Nace Bugjoni-Kumanovë",
//             description: "Marrja e njohurive të duhura mbi zhvillimin e qëndrueshëm dhe kuptimi i eco shkollave.",
//             image: "https://images.unsplash.com/photo-1755718669933-47d644395aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMG9mJTIwcGVvcGxlJTIwZWNvJTIwd29ya3Nob3AlMjBldmVudHxlbnwxfHx8fDE3NzAxMjgzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
//             category: "Aktivitet teorik"
//         },
//         {
//             id: 2,
//             title: "Aktivitetet makinerike dhe ruajtja e ambientit",
//             date: "30.01.2026",
//             time: "12:00 deri 13:00",
//             location: "Nace Bugjoni-Kumanovë ",
//             description: "Marrja e njohurive të duhura mbi mbrojtjen e mjedisit nga aktivitetet makinerike, duke ndjekur trajnime periodike dhe praktikat e mbrojtjes së mjedisit.",
//             image: "https://images.unsplash.com/photo-1721814131928-4cfcfdbd1c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY28lMjBmcmllbmRseSUyMHNjaG9vbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcwMTI4MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
//             category: "Aktivitet teorik"
//         },
//         {
//             id: 3,
//             title: "Mbeturinat elektronike dhe pasojat e saj në ambient.",
//             date: "06.02.2026",
//             time: "12:00 deri 13:00",
//             location: "Nace Bugjoni-Kumanovë",
//             description: "Ndikimet e pajisjeve elektronike dhe e-mbeturinave, si dhe mënyrat për menaxhimin e tyre në mënyrë të qëndrueshme.",
//             image: "https://images.unsplash.com/photo-1642439986788-825f9075691e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd3JpdGluZyUyMGluJTIwbm90ZWJvb2slMjBuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MDEyODM2OHww&ixlib=rb-4.1.0&q=80&w=1080",
//             category: "Aktivitet teorik"
//         }
//     ];