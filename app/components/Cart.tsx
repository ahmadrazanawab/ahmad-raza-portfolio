import Image, { StaticImageData } from 'next/image';

import React, { ReactElement } from 'react'


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
}
const Cart = () => {

    const mySkills: ImySkills[] = [
        {
            title: "JavaScript",
            description: "I build interactive apps using ES6+ features, DOM handling, and API integration on frontend and backend.",
            img: js
        },
        {
            title: "React.js",
            description: "I develop dynamic UIs with React using hooks, props, routing, and performance optimizations.",
            img: reactjs
        },
        {
            title: "Next.js",
            description: "Next.js helps me build SEO-friendly, fast apps with SSR, SSG, dynamic routing, and Vercel deployment.",
            img: nextjs
        },
        {
            title: "TypeScript",
            description: "I use TypeScript for type safety, interfaces, and reliable code in both frontend and backend projects.",
            img: typescript
        },
        {
            title: "Tailwind CSS",
            description: "I build responsive, clean UIs with Tailwind&apos;s utility-first classes, themes, and transitions.",
            img: tailwind
        },
        {
            title: "Node.js & Express",
            description: "I create scalable REST APIs using Node and Express with routing, auth, and database integration.",
            img: nodejs
        },
        {
            title: "Express",
            description: "I use Express to manage routes, middleware, and APIs with tools for security, uploads, and logging.",
            img: express
        },
        {
            title: "MySQL & PostgreSQL",
            description: "I design relational schemas, write complex queries, and manage databases using SQL tools and ORMs.",
            img: postgreSQL
        },
        {
            title: "MongoDB",
            description: "I use MongoDB with Mongoose for flexible, schema-free data handling and cloud storage via Atlas.",
            img: mongodb
        },
        {
            title: "Git & GitHub",
            description: "I use Git for version control and GitHub for collaboration, PRs, CI/CD, and organized repositories.",
            img: git
        }
    ];

// testing
    return (
        <section>
            <section className="bg-gradient-to-b from-teal-50 via-white to-white">
                <div className="mx-auto w-[90%] md:w-[85%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-4">
                    {mySkills.map(({ title, description, icon, img }, idx) => (
                        <div
                            key={idx}
                            className="relative group overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-emerald-400/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-emerald-400/5 group-hover:to-teal-500/5 transition-opacity" />
                            <div className="relative h-44 w-full rounded-t-xl overflow-hidden">
                                <Image src={img} fill className="object-cover" alt="img" />
                            </div>
                            <div className="p-5">
                                <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">{icon} {title}</h4>
                                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{description}</p>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-teal-500/0 group-hover:ring-2 group-hover:ring-teal-500/20 transition" />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default Cart
