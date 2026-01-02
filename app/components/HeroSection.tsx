import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 md:px-10 lg:px-16 pt-20 md:pt-24 pb-12 bg-gradient-to-b from-teal-50 via-white to-white">

            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-8 -left-8 w-56 h-56 md:w-72 md:h-72 rounded-full bg-emerald-200/40 blur-3xl" />
                <div className="absolute bottom-8 -right-8 w-56 h-56 md:w-72 md:h-72 rounded-full bg-teal-200/40 blur-3xl" />
            </div>
            {/* Left Side Text */}
            <div className="w-full text-center md:text-left max-w-2xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold tracking-tight text-gray-900 mb-3">
                    <span className="whitespace-nowrap">Hi, I&apos;m <span className="inline-flex items-center gap-1 sm:gap-2"><span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Ahmad Raza</span><span aria-hidden="true">👋</span></span></span>
                </h1>
                <div className="h-1 w-20 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-3" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mb-2">
                    A Passionate Full Stack Developer
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">Currently working • 6 months experience</p>
                <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-8">
                    Specializing in MERN Stack + Next.js, TypeScript, and SQL. I build scalable web
                    applications with modern and clean architecture.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    {[
                        "TypeScript",
                        "Next.js",
                        "React",
                        "Node.js",
                        "MongoDB",
                        "TailwindCSS",
                    ].map((item) => (
                        <span
                            key={item}
                            className="px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-white border border-black/5 shadow-sm hover:border-teal-200 hover:bg-teal-50/50 transition"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                    <a
                        href="/resume/Md-Ahmad-Raza-2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-teal-600 text-white shadow-sm hover:bg-teal-700 active:bg-teal-800 transition"
                    >
                        View Resume
                    </a>
                    <Link
                        href="/project"
                        className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-teal-600 text-teal-700 hover:text-white hover:bg-teal-600 transition"
                    >
                        See Projects
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-sm mx-auto md:mx-0 text-center md:text-left">
                    <div className="rounded-lg border border-black/5 bg-white px-3 py-2 shadow-sm hover:shadow-md transition">
                        <p className="text-xl font-bold text-gray-900">8 months</p>
                        <p className="text-xs text-gray-600">Experience</p>
                    </div>
                    <div className="rounded-lg border border-black/5 bg-white px-3 py-2 shadow-sm hover:shadow-md transition">
                        <p className="text-xl font-bold text-gray-900">20+</p>
                        <p className="text-xs text-gray-600">Projects</p>
                    </div>
                    <div className="rounded-lg border border-black/5 bg-white px-3 py-2 shadow-sm hover:shadow-md transition">
                        <p className="text-xl font-bold text-gray-900">Currently</p>
                        <p className="text-xs text-gray-600">Working</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
