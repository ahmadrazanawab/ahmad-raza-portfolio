'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ExternalLink,
    Github,
    Briefcase,
    Code2,
    ArrowUpRight,
    Zap,
} from 'lucide-react'

interface Project {
    title: string
    icon: string
    description: string
    tech: string[]
    liveLink: string
    githubLink?: string
    category: 'Personal' | 'Client' | 'Company'
    featured?: boolean
}

const projects: Project[] = [
    {
        title: 'College Event Management System',
        icon: '🎓',
        category: 'Personal',
        featured: true,
        tech: ['Next.js', 'TypeScript', 'MongoDB', 'JWT', 'Zod', 'Tailwind'],
        description:
            'Full-stack event management platform with role-based access for admins and students. Includes secure JWT authentication, event CRUD, registrations, and scalable MongoDB backend.',
        liveLink: 'https://eventify-one-livid.vercel.app/',
        githubLink: 'https://github.com/ahmadrazanawab/eventify',
    },
    {
        title: 'iNotebook – Note App',
        icon: '📦',
        category: 'Personal',
        featured: true,
        tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        description:
            'Secure MERN-based note-taking app with full CRUD, authentication, protected routes, and clean MVC backend architecture.',
        liveLink: 'https://ahmad-raza-notes-app.netlify.app',
        githubLink: 'https://github.com/ahmadrazanawab/notes-app',
    },
    {
        title: 'Life Style Home Decor',
        icon: '🛋️',
        category: 'Client',
        tech: ['Next.js', 'TypeScript', 'MERN', 'Tailwind CSS'],
        description:
            'Client portfolio website for a home decor brand featuring a modern UI, responsive layout, and optimized performance.',
        liveLink: 'https://www.lifestylehomedecor.in/',
    },
    {
        title: 'Nithin Hardware',
        icon: '🔩',
        category: 'Client',
        tech: ['Next.js', 'TypeScript', 'MERN', 'Tailwind CSS'],
        description:
            'Business website developed for a hardware company with clean design, fast loading, and mobile-first responsiveness.',
        liveLink: 'https://www.nitinhardware.in/',
    },
    {
        title: 'Al‑Mawa International',
        icon: '🏢',
        category: 'Company',
        tech: ['Next.js', 'TypeScript', 'MERN', 'Tailwind CSS'],
        description:
            'Official company website for Al‑Mawa International showcasing services, brand identity, and a fully responsive professional layout.',
        liveLink: 'https://www.al-mawa.international/',
    },
]

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
    Personal: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
    Client: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
    Company: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
}

export default function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState<'All' | 'Personal' | 'Client' | 'Company'>('All')

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === selectedCategory)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    return (
        <section className="relative mt-6 w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-24 lg:py-32 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-40 right-1/4 h-80 w-80 rounded-full bg-emerald-100 blur-3xl"
                />
                <motion.div
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-32 left-1/3 h-96 w-96 rounded-full bg-blue-100 blur-3xl"
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 mb-6">
                        <Zap size={16} className="text-emerald-600" />
                        <span className="text-xs sm:text-sm font-semibold text-emerald-700">
                            My Work
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4">
                        🚀 Projects &{' '}
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Work
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A curated collection of personal projects, client work, and company websites built
                        with modern full-stack technologies.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-14"
                >
                    {(['All', 'Personal', 'Client', 'Company'] as const).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 border-2 ${selectedCategory === category
                                    ? 'border-emerald-500 bg-emerald-500 text-white shadow-lg'
                                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        key={selectedCategory}
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredProjects.map((project, index) => {
                            const colors = categoryColors[project.category]

                            return (
                                <motion.div
                                    key={project.title}
                                    variants={itemVariants as any}
                                    className="group relative h-full"
                                >
                                    {/* Glow effect */}
                                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-400 to-blue-400 opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300" />

                                    {/* Card */}
                                    <div className="relative h-full rounded-2xl border-2 border-slate-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col">
                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <motion.div
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-yellow-100 border border-yellow-300 px-3 py-1 text-xs font-bold text-yellow-700"
                                            >
                                                ⭐ Featured
                                            </motion.div>
                                        )}

                                        {/* Header */}
                                        <div className="mb-6 flex items-start justify-between">
                                            <div className="flex items-start gap-3 flex-1">
                                                <span className="text-3xl mt-1">{project.icon}</span>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div
                                                className={`rounded-full border-2 px-3 py-1.5 text-xs font-bold whitespace-nowrap ml-2 ${colors.bg} ${colors.border} ${colors.text}`}
                                            >
                                                {project.category}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-6 flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <motion.span
                                                    key={tech}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                            <Link
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                                            >
                                                Live Demo
                                                <ArrowUpRight
                                                    size={16}
                                                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                                                />
                                            </Link>

                                            {project.githubLink && (
                                                <Link
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
                                                >
                                                    Code
                                                    <Github
                                                        size={16}
                                                        className="group-hover/link:scale-110 transition-transform"
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <Code2 size={48} className="mx-auto text-slate-300 mb-4" />
                        <p className="text-slate-600">No projects found in this category.</p>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
