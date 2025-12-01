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
        <section id="projects" className="bg-gradient-to-b from-teal-50 via-white to-white px-6 md:px-10 lg:px-16 py-16 mt-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight mb-12">
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">🚀 Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map(({ title, icon, description, liveLink, githubLink }, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl border border-black/5 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-500/0 via-emerald-400/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-emerald-400/5 group-hover:to-teal-500/5 transition-opacity" />

                            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-2">
                                <span>{icon}</span> {title}
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4">{description}</p>
                            <div className="flex gap-4 text-sm font-medium">
                                <Link
                                    href={liveLink}
                                    target="_blank"
                                    className="flex items-center gap-1 text-teal-700 hover:text-teal-800 hover:underline"
                                >
                                    🔗 Live Demo <ExternalLink size={14} />
                                </Link>
                                <Link
                                    href={githubLink}
                                    target="_blank"
                                    className="flex items-center gap-1 text-gray-600 hover:text-gray-800 hover:underline"
                                >
                                    🔗 GitHub <ExternalLink size={14} />
                                </Link>
                            </div>
                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-teal-500/0 group-hover:ring-2 group-hover:ring-teal-500/20 transition" />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

