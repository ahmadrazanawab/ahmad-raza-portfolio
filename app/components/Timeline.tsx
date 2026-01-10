"use client";

import React, { useState } from "react";
import { Calendar, Briefcase, BookOpen, Award } from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  org: string;
  desc: string;
  type: "work" | "education";
  icon: React.ElementType;
};

const timelineData: TimelineItem[] = [
  {
    year: "2025 – Present",
    title: "Full Stack Developer",
    org: "Al-Mawa International (OPC) Limited",
    desc: "9 months of experience working as a Full Stack Developer, building scalable web applications using modern technologies like Next.js, React, TypeScript, and Tailwind CSS.",
    type: "work",
    icon: Briefcase,
  },
  {
    year: "2024 – 2026",
    title: "Master of Computer Applications (MCA)",
    org: "Dr. P. A. Inamdar University",
    desc: "Currently pursuing MCA (Semester 2), focusing on advanced software development, databases, and system design.",
    type: "education",
    icon: BookOpen,
  },
  {
    year: "2020 – 2023",
    title: "Bachelor of Computer Applications (BCA)",
    org: "Abeda Inamdar Senior College, Pune",
    desc: "Completed graduation with strong foundations in programming, data structures, web technologies, and software engineering.",
    type: "education",
    icon: Award,
  },
  {
    year: "2020",
    title: "Higher Secondary (12th)",
    org: "Anglo Urdu Boy's High School & Junior College, Pune",
    desc: "Completed 12th with a focus on science and mathematics.",
    type: "education",
    icon: Award,
  },
  {
    year: "2018",
    title: "Secondary School (10th)",
    org: "Insan High School, Kishanganj, Bihar",
    desc: "Completed 10th with a strong academic foundation.",
    type: "education",
    icon: Award,
  },
];

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my professional journey and educational background
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-12 h-12 -translate-x-1/2 z-20">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                        item.type === "work"
                          ? "from-blue-500 to-blue-600"
                          : "from-purple-500 to-pink-500"
                      } flex items-center justify-center shadow-lg transition-all duration-300 ${
                        hoveredIndex === index ? "scale-125 shadow-2xl" : ""
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      isLeft
                        ? "md:pr-10 md:text-right"
                        : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${
                        item.type === "work"
                          ? "from-slate-700 to-slate-800 border-blue-500/30"
                          : "from-slate-700/50 to-slate-800/50 border-purple-500/30"
                      } border rounded-xl p-6 transition-all duration-300 hover:shadow-2xl ${
                        hoveredIndex === index
                          ? "scale-105 border-opacity-100 shadow-2xl"
                          : "border-opacity-50"
                      }`}
                    >
                      {/* Year */}
                      <div className="flex items-center gap-2 mb-3 justify-start md:justify-inherit">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm font-semibold text-slate-300 mb-3">
                        {item.org}
                      </p>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Accent line */}
                      <div
                        className={`h-0.5 mt-4 transition-all duration-300 ${
                          hoveredIndex === index ? "w-full" : "w-0"
                        } bg-gradient-to-r ${
                          item.type === "work"
                            ? "from-blue-500 to-transparent"
                            : "from-purple-500 to-transparent"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
