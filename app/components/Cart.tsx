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
            description: "I build responsive, clean UIs with Tailwind’s utility-first classes, themes, and transitions.",
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


    return (
        <section>
            <section className="bg-[#D8E2EC]">
                <div className="mx-auto w-[80%] grid grid-cols-3  gap-6 p-2 rounded-lg">
                    {mySkills.map(({ title, description, icon, img }, idx) => (
                        <div key={idx} className="relative group overflow-hidden hover:scale-105 rounded-lg bg-gradient-to-l from-gray-100 via-white to-gray-100 shadow-md">
                            <div className="absolute  cursor-pointer inset-0 z-10 bg-yellow-300 opacity-80  translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                            <div className="relative z-9 h-40 w-full rounded-t-lg">
                                <Image src={img} fill className="object-fill rounded-t-lg" alt="img" />
                            </div>
                            <div className="p-5 relative z-20">
                                <h4 className="text-xl">{icon} {title}</h4>
                                <p>{description}</p>
                            </div>
                        </div>
                    ))}


                    {/* {mySkills.map(({ title, description, icon, img }, idx) => (
                        <div key={idx} className="relative group overflow-hidden hover:scale-105 rounded-lg bg-gradient-to-l from-gray-100 via-white to-gray-100 shadow-md">
                            <div className="absolute  cursor-pointer inset-0 z-10 bg-yellow-300 opacity-80 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
                            <div className="relative z-9 h-40 w-full rounded-t-lg">
                                <Image src={img} fill className="object-fill rounded-t-lg" alt="img" />
                            </div>
                            <div className="p-5 relative z-30">
                                <h4 className="text-xl">{icon} {title}</h4>
                                <p>{description}</p>
                            </div>
                        </div>
                    ))} */}


                </div>
            </section>
        </section>
    )
}

export default Cart
