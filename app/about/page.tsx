"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-teal-50 via-white to-white text-gray-800 flex flex-col items-center pt-24 pb-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          About Me
        </h1>

        <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
          Hi 👋 I&apos;m a <span className="font-semibold">Full Stack Developer</span> with 6 months of experience
          building dynamic and responsive web applications. I work primarily
          with the <span className="font-semibold">MERN stack</span> and enjoy using{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">TypeScript</span>, and{" "}
          <span className="font-semibold">PostgreSQL</span> to craft clean,
          efficient, and scalable solutions.
        </p>

        <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
          I love creating seamless user experiences and robust backend systems.
          I’ve also worked with tools like <span className="font-semibold">Cloudinary</span> for media management
          and <span className="font-semibold">Git</span> for version control.
          My focus is on writing maintainable code and building applications that
          solve real-world problems.
        </p>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          I’m constantly learning and exploring new technologies to improve my
          craft. My goal is to grow as a developer and contribute to impactful
          projects that make a difference.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "MongoDB",
              "Express.js",
              "React.js",
              "Next.js",
              "Node.js",
              "TypeScript",
              "PostgreSQL",
              "Cloudinary",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white border border-black/5 shadow-sm px-4 py-2 rounded-2xl text-sm font-medium hover:shadow-md hover:border-teal-200 hover:bg-teal-50/50 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/5 bg-white p-6 text-left shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience Highlights</h3>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>✅ Built full-stack apps with Next.js App Router, TypeScript, and MongoDB.</li>
              <li>✅ Implemented form validation with React Hook Form + Zod across pages.</li>
              <li>✅ Designed modern, responsive UIs with TailwindCSS and motion effects.</li>
              <li>✅ Created clean API routes and Mongoose models with proper validation.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 text-left shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Values</h3>
            <div className="flex flex-wrap gap-2">
              {["Clean Code", "Ownership", "Performance", "Accessibility", "Collaboration"].map((value) => (
                <span key={value} className="px-3 py-1.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-left">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center md:text-left">Currently Learning</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
            {["Advanced TypeScript Patterns", "Next.js Image & Perf", "Database Indexing", "Testing (Vitest/Jest)", "CI/CD Basics"].map((topic) => (
              <span key={topic} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-black/5 shadow-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/project" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-teal-600 text-white hover:bg-teal-700 transition">View Projects</a>
          <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white transition">Contact Me</a>
        </div>
      </motion.div>
    </div>
  );
}
