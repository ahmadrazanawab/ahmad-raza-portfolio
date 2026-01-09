

// import Link from "next/link";import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
    const skills = [
        "TypeScript",
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
    ];

    const stats = [
        { value: "9+", label: "Months Experience", icon: "💼" },
        { value: "20+", label: "Projects Built", icon: "🚀" },
        { value: "Currently", label: "Working", icon: "✨" },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Animated Background Elements */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Grid - Image and Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 w-fit mb-6">
                            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold text-teal-600 uppercase tracking-widest">
                                Welcome to my portfolio
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                Ahmad Raza
                            </span>
                        </h1>

                        {/* Accent Line */}
                        <div className="h-1.5 w-16 sm:w-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-6" />

                        {/* Subheading */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-4">
                            Full Stack Developer & Creative Problem Solver
                        </h2>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
                            Building modern, scalable web applications with cutting-edge technologies.
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                            Specializing in <span className="text-teal-700 font-semibold">MERN Stack</span>, <span className="text-cyan-700 font-semibold">Next.js</span>, and <span className="text-blue-700 font-semibold">TypeScript</span>.
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white border border-gray-300 hover:border-teal-400 hover:bg-teal-50 text-gray-700 transition-all duration-300 shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                            <a
                                href="/resume/Md-Ahmad-Raza-2026-01-09.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                            >
                                View Resume
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <Link
                                href="/project"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-teal-500 text-teal-700 font-semibold hover:bg-teal-50 active:scale-95 transition-all duration-300"
                            >
                                See Projects
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-teal-50 hover:border-teal-400 hover:text-teal-600 transition-all duration-300 shadow-sm"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-cyan-50 hover:border-cyan-400 hover:text-cyan-600 transition-all duration-300 shadow-sm"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 shadow-sm"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:flex lg:flex-col lg:gap-6">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 hover:border-teal-300 hover:shadow-lg transition-all duration-300 shadow-sm"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                                <div className="relative">
                                    <p className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center pt-5 border-t border-gray-300">
                    <p className="text-gray-600 mb-4">Interested in working together?</p>
                    <a
                        href="mailto:contact@example.com"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-teal-50 hover:border-teal-400 transition-all duration-300 font-semibold shadow-sm"
                    >
                        Get in Touch
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

// const HeroSection = () => {
//     return (
//         <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 md:px-10 lg:px-16 pt-20 md:pt-24 pb-12 bg-gradient-to-b from-teal-50 via-white to-white">

//             <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//                 <div className="absolute top-8 -left-8 w-56 h-56 md:w-72 md:h-72 rounded-full bg-emerald-200/40 blur-3xl" />
//                 <div className="absolute bottom-8 -right-8 w-56 h-56 md:w-72 md:h-72 rounded-full bg-teal-200/40 blur-3xl" />
//             </div>
//             {/* Left Side Text */}
//             <div className="w-full text-center md:text-left max-w-2xl mx-auto">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold tracking-tight text-gray-900 mb-3">
//                     <span className="whitespace-nowrap">Hi, I&apos;m <span className="inline-flex items-center gap-1 sm:gap-2"><span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Ahmad Raza</span><span aria-hidden="true">👋</span></span></span>
//                 </h1>
//                 <div className="h-1 w-20 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-3" />
//                 <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mb-2">
//                     A Passionate Full Stack Developer
//                 </h2>
//                 <p className="text-sm md:text-base text-gray-600 mb-4">Currently working • 6 months experience</p>
//                 <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-8">
//                     Specializing in MERN Stack + Next.js, TypeScript, and SQL. I build scalable web
//                     applications with modern and clean architecture.
//                 </p>
//                 <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
//                     {[
//                         "TypeScript",
//                         "Next.js",
//                         "React",
//                         "Node.js",
//                         "MongoDB",
//                         "TailwindCSS",
//                     ].map((item) => (
//                         <span
//                             key={item}
//                             className="px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-white border border-black/5 shadow-sm hover:border-teal-200 hover:bg-teal-50/50 transition"
//                         >
//                             {item}
//                         </span>
//                     ))}
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
//                     <a
//                         href="/resume/Md-Ahmad-Raza-2026.pdf"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-teal-600 text-white shadow-sm hover:bg-teal-700 active:bg-teal-800 transition"
//                     >
//                         View Resume
//                     </a>
//                     <Link
//                         href="/project"
//                         className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-teal-600 text-teal-700 hover:text-white hover:bg-teal-600 transition"
//                     >
//                         See Projects
//                     </Link>
//                 </div>
//                 <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-sm mx-auto md:mx-0 text-center md:text-left">
//                     <div className="rounded-lg border border-black/5 bg-white px-3 py-2 shadow-sm hover:shadow-md transition">
//                         <p className="text-xl font-bold text-gray-900">8 months</p>
//                         <p className="text-xs text-gray-600">Experience</p>
//                     </div>
//                     <div className="rounded-lg border border-black/5 bg-white px-3 py-2 shadow-sm hover:shadow-md transition">
//                         <p className="text-xl font-bold text-gray-900">20+</p>
//                         <p className="text-xs text-gray-600">Projects</p>
//                     </div>
//                     <div className="rounded-lg border border-black/5 bg-white px-3 py-2 shadow-sm hover:shadow-md transition">
//                         <p className="text-xl font-bold text-gray-900">Currently</p>
//                         <p className="text-xs text-gray-600">Working</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
