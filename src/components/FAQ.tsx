import React, { useState } from "react";
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
    const faqs = [
        {
            q: "What ages do you accept?",
            a: "We currently welcome learners from ages 6–14, with small class sizes for personalized support.",
        },
        {
            q: "Is outdoor learning safe year-round?",
            a: "Yes. Activities are planned with weather, supervision, and safety protocols in mind. We adapt sessions for rain, cold, or heat.",
        },
        {
            q: "How is sustainability included in the curriculum?",
            a: "Sustainability is integrated across subjects—science, projects, field activities, and everyday habits like composting and waste sorting.",
        },
        {
            q: "Do you offer transportation?",
            a: "We can support transportation options depending on area and demand. Contact us to check availability for your neighborhood.",
        },
        {
            q: "How can parents get involved?",
            a: "Parents can join community planting days, workshops, classroom talks, and volunteer initiatives throughout the year.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mt-4"></div>
                    <p className="mt-5 text-lg text-gray-600">
                        Quick answers to the most common questions from parents and families.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <div
                                key={idx}
                                className={`rounded-2xl border transition-all ${isOpen
                                    ? "border-green-300 bg-green-50"
                                    : "border-gray-200 bg-white hover:border-green-200"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                                >
                                    <span
                                        className={`text-base md:text-lg font-semibold ${isOpen ? "text-green-800" : "text-gray-900"
                                            }`}
                                    >
                                        {item.q}
                                    </span>

                                    <span
                                        className={`shrink-0 h-10 w-10 rounded-full grid place-items-center transition ${isOpen
                                            ? "bg-green-600 text-white"
                                            : "bg-gray-100 text-gray-700"
                                            }`}
                                        aria-hidden="true"
                                    >
                                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"
                                        }`}
                                >
                                    <div className="px-5 pb-5">
                                        <p className="text-gray-700 leading-relaxed">{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
                    >
                        Still have questions? Contact us
                    </a>
                </div>
            </div>
        </section>
    );
}