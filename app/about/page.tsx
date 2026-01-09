"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br mt-10 from-slate-50 via-white to-teal-50/30 pt-20 pb-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                            Full Stack Developer
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Crafting scalable web applications with modern technologies and a passion for clean, efficient code
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
                    >
                        {/* Left Column - About */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About Me</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p className="text-base sm:text-lg">
                                        I&apos;m a dedicated Full Stack Developer with 9+ months of hands-on experience building modern, responsive web applications. My expertise lies in the MERN stack, complemented by proficiency in Next.js, TypeScript, and PostgreSQL.
                                    </p>
                                    <p className="text-base sm:text-lg">
                                        What drives me is the intersection of elegant user interfaces and robust backend architecture. I believe that great software isn&apos;t just functional—it&apos;s intuitive, performant, and maintainable. Every line of code I write is an opportunity to solve real problems and create meaningful digital experiences.
                                    </p>
                                    <p className="text-base sm:text-lg">
                                        Beyond technical skills, I bring a growth mindset and collaborative spirit to every project. I&apos;m constantly exploring emerging technologies, refining best practices, and contributing to the developer community. My goal is to build software that makes a tangible impact while continuously evolving as an engineer.
                                    </p>
                                </div>
                            </div>

                            {/* Technical Expertise */}
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl p-6">
                                        <h4 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">Frontend</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["React.js", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"].map((skill) => (
                                                <span key={skill} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl p-6">
                                        <h4 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">Backend</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"].map((skill) => (
                                                <span key={skill} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl p-6">
                                        <h4 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">Tools & Platforms</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Git", "GitHub", "Cloudinary", "Vercel", "Postman"].map((skill) => (
                                                <span key={skill} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl p-6">
                                        <h4 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">Practices</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Responsive Design", "RESTful APIs", "Version Control", "Agile", "Code Review"].map((skill) => (
                                                <span key={skill} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Highlights */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Experience Card */}
                            <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Experience</h3>
                                </div>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="text-teal-600 font-bold">•</span>
                                        <span>9+ months of professional development experience</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-teal-600 font-bold">•</span>
                                        <span>Built full-stack applications from concept to deployment</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-teal-600 font-bold">•</span>
                                        <span>Implemented complex form validations with React Hook Form and Zod</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-teal-600 font-bold">•</span>
                                        <span>Designed RESTful APIs with proper authentication and validation</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Core Values Card */}
                            <div className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Core Values</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Clean Code", "User-Centric", "Performance", "Accessibility", "Collaboration", "Continuous Learning"].map((value) => (
                                        <span key={value} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                                            {value}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Currently Learning Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Currently Learning</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="text-blue-600">→</span>
                                        <span>Advanced TypeScript patterns and generics</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-600">→</span>
                                        <span>Next.js performance optimization techniques</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-600">→</span>
                                        <span>Database indexing and query optimization</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-600">→</span>
                                        <span>Testing with Vitest and Jest</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-600">→</span>
                                        <span>CI/CD pipelines and DevOps fundamentals</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { number: "9+", label: "Months Experience" },
                            { number: "15+", label: "Projects Completed" },
                            { number: "10+", label: "Technologies Mastered" },
                            { number: "100%", label: "Commitment to Quality" }
                        ].map((stat, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl p-6 text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="mt-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-8 sm:p-12 text-center"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Let&apos;s Build Something Amazing Together
                        </h2>
                        <p className="text-teal-50 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/project"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
                            >
                                View My Projects
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition-colors border-2 border-white/20"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}