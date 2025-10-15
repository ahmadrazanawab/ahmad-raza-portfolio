"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center py-16 mt-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          About Me
        </h1>

        <p className="text-lg mb-4 leading-relaxed">
          Hi 👋 I'm a <span className="font-semibold">Full Stack Developer</span> with 6 months of experience
          building dynamic and responsive web applications. I work primarily
          with the <span className="font-semibold">MERN stack</span> and enjoy using{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">TypeScript</span>, and{" "}
          <span className="font-semibold">PostgreSQL</span> to craft clean,
          efficient, and scalable solutions.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          I love creating seamless user experiences and robust backend systems.
          I’ve also worked with tools like <span className="font-semibold">Cloudinary</span> for media management
          and <span className="font-semibold">Git</span> for version control.
          My focus is on writing maintainable code and building applications that
          solve real-world problems.
        </p>

        <p className="text-lg leading-relaxed">
          I’m constantly learning and exploring new technologies to improve my
          craft. My goal is to grow as a developer and contribute to impactful
          projects that make a difference.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
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
                className="bg-white shadow px-4 py-2 rounded-2xl text-sm font-medium hover:shadow-md transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
