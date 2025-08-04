// app/components/Footer.tsx

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-6 md:px-16 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left: Logo or Name */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold text-[#34B7A7]">Ahmad Raza</h1>
                    <p className="text-sm text-gray-400 mt-1">
                        Full Stack Developer • MERN + TypeScript
                    </p>
                </div>
                <div>
                    <h4 className="text-xl text-center md:text-start ml-2 font-semibold text-white mb-2">Contact</h4>
                    <address className="not-italic text-sm text-gray-400 leading-relaxed space-y-1">
                        <p>📍 Pune, Maharashtra, India</p>
                        <p>
                            📧{" "}
                            <a
                                href="mailto:ahmad.raza.dev@gmail.com"
                                className="hover:text-[#34B7A7] transition"
                            >
                                ahmadrazanawab@gmail.com
                            </a>
                        </p>
                        <p>
                            📞{" "}
                            <a
                                href="tel:+919123456789"
                                className="hover:text-[#34B7A7] transition"
                            >
                                +91 7870752899
                            </a>
                        </p>
                    </address>
                </div>


                {/* Center: Nav Links */}
                <ul className="flex flex-wrap gap-4 justify-center text-sm text-gray-300">
                    <li>
                        <a href="#home" className="hover:text-[#34B7A7] transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-[#34B7A7] transition">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-[#34B7A7] transition">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-[#34B7A7] transition">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Right: Social Icons */}
                <div className="flex gap-5 text-xl md:text-2xl justify-center">
                    <a
                        href="https://github.com/ahmadrazanawab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#34B7A7] transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#34B7A7] transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="hover:text-[#34B7A7] transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* Bottom: Copyright */}
            <div className="text-center mt-8 border-t-2 border-gray-700 text-xs text-gray-500">
                <h4 className="mt-4 md:text-lg"> &copy; {new Date().getFullYear()} <span className="text-[#34B7A7]">Ahmad Raza</span>. All rights reserved.</h4>
            </div>
        </footer>
    );
};

export default Footer;
