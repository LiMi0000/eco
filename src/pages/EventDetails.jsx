import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventDetails() {
    const { id } = useParams();

    const events = useMemo(
        () => [
            {
                id: 1,
                title: "Spring Community Planting",
                date: "March 15, 2026",
                time: "9:00 AM - 2:00 PM",
                location: "School Community Garden",
                description:
                    "Join us for our annual planting day! We'll be sowing seeds for the summer harvest and learning about soil health.",
                image:
                    "https://images.unsplash.com/photo-1755718669933-47d644395aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMG9mJTIwcGVvcGxlJTIwZWNvJTIwd29ya3Nob3AlMjBldmVudHxlbnwxfHx8fDE3NzAxMjgzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
                category: "Community",
                agenda: [
                    "Welcome + overview (10 min)",
                    "Garden prep + compost station (30 min)",
                    "Seed planting + watering plan (60 min)",
                    "Mini session: soil health basics (20 min)",
                    "Wrap-up + group photo (10 min)",
                ],
                whatToBring: ["Gloves", "Refillable water bottle", "Comfortable shoes"],
            },
            {
                id: 2,
                title: "Renewable Energy Science Fair",
                date: "April 22, 2026",
                time: "1:00 PM - 4:00 PM",
                location: "Main Hall",
                description:
                    "Students showcase their innovative projects focused on solar, wind, and kinetic energy solutions.",
                image:
                    "https://images.unsplash.com/photo-1721814131928-4cfcfdbd1c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY28lMjBmcmllbmRseSUyMHNjaG9vbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcwMTI4MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
                category: "Academic",
                agenda: [
                    "Project showcase opens (1:00 PM)",
                    "Live demos + judging (2:00 PM)",
                    "Awards + closing remarks (3:30 PM)",
                ],
                whatToBring: ["Notebook (optional)", "Questions for students"],
            },
            {
                id: 3,
                title: "Forest Bathing Workshop",
                date: "May 10, 2026",
                time: "10:00 AM - 11:30 AM",
                location: "Nearby Woodlands",
                description:
                    "A guided mindfulness session for parents and students to connect deeply with the forest environment.",
                image:
                    "https://images.unsplash.com/photo-1642439986788-825f9075691e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd3JpdGluZyUyMGluJTIwbm90ZWJvb2slMjBuYXR1cmUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MDEyODM2OHww&ixlib=rb-4.1.0&q=80&w=1080",
                category: "Wellness",
                agenda: [
                    "Arrival + grounding exercise (10 min)",
                    "Slow guided walk (35 min)",
                    "Quiet sit-spot reflection (20 min)",
                    "Sharing circle + closing (15 min)",
                ],
                whatToBring: ["Layered clothing", "Small towel/blanket", "Phone on silent"],
            },
        ],
        []
    );

    const eventId = Number(id);
    const event = events.find((e) => e.id === eventId);

    if (!event) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-6">
                <div className="max-w-md w-full">
                    <h1 className="text-2xl font-bold text-gray-900">Event not found</h1>
                    <p className="mt-2 text-gray-600">
                        This event doesn’t exist or was removed.
                    </p>
                    <Link
                        to="/#events"
                        className="inline-flex mt-6 text-green-700 font-semibold hover:text-green-800"
                    >
                        ← Back to events
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Top hero */}
            <div className="relative h-[44vh] min-h-[320px] w-full">
                <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                    <Link
                        to="/#events"
                        className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-white"
                    >
                        ← Back to site
                    </Link>
                </div>

                <div className="absolute bottom-8 left-0 right-0">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-800 uppercase tracking-wide">
                            {event.category}
                        </div>
                        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
                            {event.title}
                        </h1>
                        <p className="mt-3 max-w-2xl text-white/90 text-lg">
                            {event.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Meta */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-gray-200 p-5">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>Date</span>
                        </div>
                        <div className="mt-2 font-semibold text-gray-900">{event.date}</div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-5">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>Time</span>
                        </div>
                        <div className="mt-2 font-semibold text-gray-900">{event.time}</div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-5">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>Location</span>
                        </div>
                        <div className="mt-2 font-semibold text-gray-900">{event.location}</div>
                    </div>
                </div>

                {/* Sections */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900">Agenda</h2>
                        <ul className="mt-4 space-y-3 text-gray-700">
                            {event.agenda.map((item, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900">What to bring</h2>
                        <ul className="mt-4 space-y-3 text-gray-700">
                            {event.whatToBring.map((item, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 rounded-2xl bg-stone-50 border border-stone-200 p-5">
                            <h3 className="font-bold text-gray-900">Quick note</h3>
                            <p className="mt-2 text-sm text-gray-700">
                                Details may change due to weather. Check back before the event day.
                            </p>
                        </div>
                    </section>
                </div>

                {/* CTA */}
                <div className="mt-12 rounded-3xl bg-green-700 p-8 text-white">
                    <h3 className="text-2xl font-bold">Want to join?</h3>
                    <p className="mt-2 text-white/90">
                        Bring a friend and come a few minutes early. We’ll guide you through everything.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="mailto:hello@example.com?subject=Event%20Registration"
                            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-green-800 hover:bg-white/90"
                        >
                            Email to register
                        </a>
                        <Link
                            to="/#events"
                            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                        >
                            Back to events
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}