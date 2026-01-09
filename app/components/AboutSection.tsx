"use client";

import React, { useState } from "react";
import { User, Code2, Target, Zap, BookOpen, Lightbulb } from "lucide-react";

export default function AboutSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const highlights = [
        {
            id: 1,
            icon: User,
            title: "Professional Experience",
            desc: "Full Stack Developer with 9 months of hands-on experience in real-world projects and production environments.",
            color: "from-cyan-500 to-blue-500",
        },
        {
            id: 2,
            icon: Code2,
            title: "Tech Stack",
            desc: "Next.js, React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Git & REST APIs.",
            color: "from-blue-500 to-purple-500",
        },
        {
            id: 3,
            icon: Target,
            title: "Career Goal",
            desc: "To become a strong full-stack engineer and build scalable, meaningful digital products.",
            color: "from-purple-500 to-pink-500",
        },
    ];

    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
        { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
    ];

    return (
        <section className="relative w-full bg-slate-50 px-4 sm:px-6 py-16 sm:py-20 md:py-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-cyan-600 uppercase tracking-widest">
                        Know me better
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3">
                        About <span className="text-cyan-600">Me</span>
                    </h2>
                    <div className="h-1 w-16 bg-cyan-600 mx-auto mt-4 rounded-full" />
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Left */}
                    <div className="lg:col-span-2 space-y-6">
                        {[
                            {
                                icon: Lightbulb,
                                text: (
                                    <>
                                        I am a passionate <span className="font-semibold text-cyan-700">Full Stack Developer</span> with
                                        <span className="font-semibold text-cyan-700"> 9 months of professional experience</span> at
                                        Al-Mawa International (OPC) Limited, building scalable and user-friendly web applications.
                                    </>
                                ),
                            },
                            {
                                icon: Code2,
                                text: (
                                    <>
                                        My core tech stack includes <span className="font-semibold text-blue-700">Next.js, React, TypeScript, Tailwind CSS</span> on
                                        the frontend and <span className="font-semibold text-cyan-700">Node.js, Express, and databases</span> on
                                        the backend.
                                    </>
                                ),
                            },
                            {
                                icon: BookOpen,
                                text: (
                                    <>
                                        I am currently pursuing my <span className="font-semibold text-purple-700">MCA (Semester 2)</span> from
                                        Dr. P. A. Inamdar University, continuously improving my software engineering skills.
                                    </>
                                ),
                            },
                            {
                                icon: Zap,
                                text: (
                                    <>
                                        My goal is to grow as a <span className="font-semibold text-pink-600">skilled full-stack engineer</span> and
                                        contribute to impactful, real-world products.
                                    </>
                                ),
                            },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
                                >
                                    <Icon className="w-6 h-6 text-cyan-600 mt-1" />
                                    <p className="text-slate-700 leading-relaxed">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Highlights */}
                    <div className="space-y-5">
                        {highlights.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setHoveredCard(item.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition hover:scale-[1.02]"
                                >
                                    <div
                                        className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>

                                    <div
                                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} transition-all`}
                                        style={{ width: hoveredCard === item.id ? "100%" : "0%" }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Skills */}
                <div className="border-t border-slate-200 pt-14">
                    <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
                        Technical Skills
                    </h3>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {skills.map((group, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
                            >
                                <h4 className="font-bold text-slate-900 mb-4">{group.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 rounded-lg text-sm bg-slate-100 text-slate-700 hover:bg-cyan-100 hover:text-cyan-700 transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
