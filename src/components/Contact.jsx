import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import contact from '../assets/contact.svg';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-green-800 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-700 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-900 rounded-full opacity-50 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Bashkohuni me Komunitetin tonë</h2>
                        <p className="text-green-100 text-lg mb-10 max-w-md">
                            Jemi të hapur për bashkëpunim me institucione publike dhe private, organizata joqeveritare dhe kompani që ndajnë vizionin tonë për një të ardhme më të gjelbër dhe më të qëndrueshme.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-700 p-3 rounded-lg">
                                    <MapPin className="h-6 w-6 text-green-300" />
                                </div>
                                <div>
                                    {/* <h4 className="font-bold text-lg">Visit Us</h4> */}
                                    <p className="text-green-100">1300 Kumanovo, <br /> North Macedonia</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-700 p-3 rounded-lg">
                                    <Phone className="h-6 w-6 text-green-300" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Telefononi në</h4>
                                    <p className="text-green-100">(555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-700 p-3 rounded-lg">
                                    <Mail className="h-6 w-6 text-green-300" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Dërgoni një email</h4>
                                    <a href="mailto:ecolearningschool@outlook.com" className="text-green-100">ecolearningschool@outlook.com</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <img src={contact} alt="Logo" className="" />

                    {/* <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-900" placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-900" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-900" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I am interested in...</label>
                                <select id="interest" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-900">
                                    <option>Admissions</option>
                                    <option>Volunteering</option>
                                    <option>General Inquiry</option>
                                    <option>Partnership</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-900" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="button" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </div> */}

                </div>
            </div>
        </section>
    );
};
