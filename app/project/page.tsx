import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Project {
    title: string;
    icon: string;
    description: string;
    liveLink: string;
    githubLink: string;
}

const projects: Project[] = [
    {
        title: "College Event Management System",
        icon: "🎓",
        description:
            "A full-stack web application built using MERN + Next.js, TypeScript, Zod, and JWT to simplify event coordination in colleges. The platform provides role-based access for admins and students. Admins can create, update, and delete events, manage users, and view participant details, while students can browse and register for upcoming events. Implemented JWT authentication for secure login and session handling. Integrated Zod and React Hook Form for type-safe and validated form handling. Designed a modern and responsive interface using Tailwind CSS and ShadCN UI. Data is stored and managed using MongoDB for scalability and efficiency. The project demonstrates expertise in Next.js App Router, API integration, and state management.",
        liveLink: "https://eventify-one-livid.vercel.app/",
        githubLink: "https://github.com/ahmadrazanawab/eventify"
    },
    {
        title: "iNotebook - Full Stack Note App",
        icon: "📦",
        description:
            "A secure and fully authenticated note-keeping web application built using the MERN Stack. It features full CRUD operations with JWT-based authentication, secure routing, and modular backend API design. The frontend is developed in React with TypeScript for type safety and better developer experience. The backend is built with Node.js and Express, using JSON-based REST APIs for data handling. Users can log in, register, update their notes, and delete them, all within a protected environment. Follows clean folder structure and MVC pattern.",
        liveLink: "https://ahmad-raza-notes-app.netlify.app",
        githubLink: "https://github.com/ahmadrazanawab/notes-app"
    },
    {
        title: "Encommer - E-commerce Frontend",
        icon: "🛒",
        description:
            "Responsive and clean frontend design for an e-commerce platform built with React and Tailwind CSS.",
        liveLink: "https://your-encommer-demo-link.com",
        githubLink: "https://github.com/yourusername/encommer"
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="bg-gray-50 px-6 md:px-16 py-16 mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                🚀 Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(({ title, icon, description, liveLink, githubLink }, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden hover:scale-105 bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg"
                    >
                        <div className="absolute flex inset-0 z-0 cursor-pointer">
                            <div className="w-1/2  bg-amber-300 opacity-80 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 " />
                            <div className="w-1/2  bg-amber-300 opacity-80 translate-x-full group-hover:translate-x-0 transition-transform duration-500 " />
                        </div>

                        <h3 className="text-xl relative group-hover:text-[#2d5239] font-semibold text-gray-800 flex items-center gap-2 mb-2">
                            <span>{icon}</span> {title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 relative group-hover:text-black">{description}</p>
                        <div className="flex gap-4 text-sm font-medium">
                            <Link
                                href={liveLink}
                                target="_blank"
                                className="flex relative items-center gap-1 text-[#34B7A7] group-hover:text-[#34B7A7] hover:underline"
                            >
                                🔗 Live Demo <ExternalLink size={14} />
                            </Link>
                            <Link
                                href={githubLink}
                                target="_blank"
                                className="flex relative items-center gap-1 group-hover:text-black text-gray-600 hover:underline"
                            >
                                🔗 GitHub <ExternalLink size={14} />
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default ProjectsSection;

