"use client";

import Image, { StaticImageData } from "next/image";
import React, { ReactElement, useState } from "react";

import js from "./assist/js.webp";
import nextjs from "./assist/nextjs2.png";
import nodejs from "./assist/nodejs.jpg";
import git from "./assist/git.webp";
import reactjs from "./assist/reactjs.jpg";
import typescript from "./assist/ts.jpeg";
import tailwind from "./assist/tailwind.jpg";
import postgreSQL from "./assist/postgres.png";
import mongodb from "./assist/mongodb.png";
import express from "./assist/expressjs.png";

interface ImySkills {
    title: string;
    description: string;
    icon?: ReactElement;
    img: StaticImageData;
    category: string;
}

const SkillsPage = () => {
    const mySkills: ImySkills[] = [
        {
            title: "JavaScript",
            description:
                "Building interactive applications using ES6+ features, asynchronous programming, DOM manipulation, and seamless API integration across frontend and backend environments.",
            img: js,
            category: "Core",
        },
        {
            title: "TypeScript",
            description:
                "Leveraging static typing, interfaces, generics, and advanced type systems to build scalable, maintainable, and error-resistant applications.",
            img: typescript,
            category: "Core",
        },
        {
            title: "React.js",
            description:
                "Crafting dynamic, performant user interfaces with hooks, context API, component composition, state management, and modern React patterns.",
            img: reactjs,
            category: "Frontend",
        },
        {
            title: "Next.js",
            description:
                "Developing production-ready applications with server-side rendering, static site generation, API routes, dynamic routing, and optimal performance strategies.",
            img: nextjs,
            category: "Frontend",
        },
        {
            title: "Tailwind CSS",
            description:
                "Designing responsive, accessible, and visually appealing interfaces using utility-first CSS, custom themes, animations, and mobile-first principles.",
            img: tailwind,
            category: "Frontend",
        },
        {
            title: "Node.js",
            description:
                "Building high-performance server-side applications with event-driven architecture, asynchronous I/O, middleware, and RESTful API design patterns.",
            img: nodejs,
            category: "Backend",
        },
        {
            title: "Express.js",
            description:
                "Creating robust backend systems with routing, middleware chains, authentication, authorization, error handling, and security best practices.",
            img: express,
            category: "Backend",
        },
        {
            title: "MongoDB",
            description:
                "Designing flexible NoSQL database schemas with Mongoose ODM, implementing aggregation pipelines, indexing strategies, and cloud deployment via Atlas.",
            img: mongodb,
            category: "Database",
        },
        {
            title: "PostgreSQL",
            description:
                "Architecting relational database systems with complex queries, transactions, joins, normalization, and performance optimization using indexes and query planning.",
            img: postgreSQL,
            category: "Database",
        },
        {
            title: "Git & GitHub",
            description:
                "Managing version control workflows with branching strategies, pull requests, code reviews, collaborative development, and CI/CD pipeline integration.",
            img: git,
            category: "Tools",
        },
    ];

    const categories = ["All", "Core", "Frontend", "Backend", "Database", "Tools"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills =
        activeCategory === "All"
            ? mySkills
            : mySkills.filter((skill) => skill.category === activeCategory);

    return (
        <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Technical Skills & Expertise
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
                        A comprehensive showcase of technologies and tools I use to build
                        modern, scalable web applications
                    </p>

                    {/* Filters */}
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${activeCategory === category
                                        ? "bg-teal-500 text-white shadow-lg scale-105"
                                        : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map(({ title, description, img, category }, idx) => (
                        <div
                            key={idx}
                            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={img}
                                    alt={title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-xs font-semibold rounded-full">
                                    {category}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600">
                                    {title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredSkills.length === 0 && (
                    <p className="text-center text-gray-500 mt-16">
                        No skills found in this category.
                    </p>
                )}
            </div>
        </section>
    );
};

export default SkillsPage;
