"use client";
import React, { useState } from "react";
import { ChevronDown, Lightbulb, MessageCircle } from "lucide-react";
import Link from "next/link";

type FAQItem = {
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    {
        question: "What is your current role and experience?",
        answer:
            "I am a Full Stack Developer with 9 months of professional experience at Al-Mawa International (OPC) Limited, where I work on building scalable and user-friendly web applications using modern technologies."
    },
    {
        question: "Which technologies do you work with?",
        answer:
            "My core tech stack includes Next.js, React, TypeScript, Tailwind CSS on the frontend, and Node.js, Express, REST APIs, and databases on the backend. I also use Git and GitHub for version control."
    },
    {
        question: "Are you currently studying?",
        answer:
            "Yes, I am currently pursuing my Master of Computer Applications (MCA), Semester 2, from Dr. P. A. Inamdar University, expected to be completed in 2026."
    },
    {
        question: "What type of roles are you looking for?",
        answer:
            "I am looking for full-time opportunities as a Full Stack Developer or Frontend-focused Full Stack role where I can contribute to real-world products and continue learning."
    },
    {
        question: "Are you open to internships, freelance, or remote work?",
        answer:
            "Yes, I am open to internships, freelance projects, and remote or on-site opportunities that allow me to grow professionally and deliver value to the team."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-white px-4 sm:px-6 py-16 sm:py-20 md:py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-20 right-1/3 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-teal-600 uppercase tracking-widest">
                            Got Questions?
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        Frequently Asked <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Questions</span>
                    </h2>

                    {/* Accent Line */}
                    <div className="h-1.5 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6" />

                    {/* Description */}
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Quick answers to common questions recruiters and collaborators often ask about my experience and expertise.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3 sm:space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-gray-200 bg-white hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/5 transition-all duration-300 -z-10" />

                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-gray-50/50 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-4 flex-1">
                                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index
                                            ? "bg-gradient-to-br from-teal-500 to-cyan-500"
                                            : "bg-gray-100 group-hover:bg-teal-50"
                                        }`}>
                                        <MessageCircle className={`w-4 h-4 transition-colors duration-300 ${openIndex === index ? "text-white" : "text-gray-600 group-hover:text-teal-600"
                                            }`} />
                                    </div>
                                    <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                                        {item.question}
                                    </span>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-all duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180 text-teal-500" : "group-hover:text-teal-400"
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-200/50 bg-gradient-to-b from-white to-gray-50/50">
                                    <div className="flex gap-4">
                                        <div className="w-1 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full flex-shrink-0" />
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 sm:mt-20  w-full text-center p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/50">
                <div className="flex justify-center mb-4">
                    <Lightbulb className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Still have questions?
                </h3>
                <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                    Feel free to reach out to me directly. I&apos;d love to discuss opportunities and answer any questions you might have.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                    Get In Touch
                    <ChevronDown className="w-4 h-4 rotate-180" />
                </Link>
            </div>
        </section>
    );
}