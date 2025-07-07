import Image from "next/image";
import ahmad from "./assist/ahmad.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-white">
      {/* Left Side Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-[#34B7A7]">Ahmad Raza</span> 👋
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
          A Passionate Full Stack Developer
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Specializing in MERN Stack, TypeScript, and SQL. I build scalable web
          applications with modern and clean architecture.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#34B7A7] text-white rounded-xl shadow-md hover:bg-[#2fa295] transition"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-[#34B7A7] text-[#34B7A7] rounded-xl shadow-md hover:bg-[#f0fdfa] transition"
          >
            See Projects
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2 flex justify-center md:mt-0 mt-10 mb-8 md:mb-0">
        <Image
          src={ahmad} // put your image in /public/profile.jpg
          alt="Ahmad Raza"
          width={300}
          height={300}
          className="rounded-full shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
