"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { GoHome } from "react-icons/go";
import { FaUser, FaTools, FaProjectDiagram } from "react-icons/fa";
import { LuContactRound } from "react-icons/lu";
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    console.log(pathname);
    const navLinks = [
        { label: "Home", to: "/", icon: <GoHome size={20} /> },
        { label: "About", to: "/about", icon: <FaUser size={20} /> },
        { label: "Skills", to: "/skills", icon: <FaTools size={20} /> },
        { label: "Project", to: "/project", icon: <FaProjectDiagram size={20} /> },
        { label: "Contact Me", to: "/contact", icon: <LuContactRound size={20} /> }
    ];

    return (
        <>
            {/* Top Navbar */}
            <nav className='flex fixed inset-x-0 top-0 justify-between items-center px-4 md:px-6 h-16 md:h-20 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
                <Link href="/" className='text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>Ahmad Raza</Link>

                {/* Hamburger Icon for Mobile/Desktop */}
                <button onClick={() => setIsSidebarOpen(true)} aria-label="Open menu" className="block md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
                    <Menu size={28} />
                </button>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map(({ label, to }, idx) => {
                        const isActive = pathname === to;
                        return (
                            <li key={idx} className="mx-1">
                                <Link
                                    href={to}
                                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors
                                            ${isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"}
                                                after:content-['']
                                                after:absolute after:left-3 after:-bottom-1
                                                after:h-[2px] after:w-0 after:bg-teal-600
                                                after:transition-all after:duration-300
                                                hover:after:w-[calc(100%-1.5rem)]`}>
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

            </nav>

            {/* Sidebar - Slide in from right */}
            <div
                className={`fixed top-0 right-0 h-full w-72 max-w-[80%] bg-white/95 dark:bg-neutral-900/95 text-gray-800 dark:text-gray-100 border-l border-black/5 dark:border-white/10 shadow-xl transform transition-transform duration-300 ease-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Icon */}
                <div className="flex justify-end py-4 px-4">
                    <button onClick={() => setIsSidebarOpen(false)} aria-label="Close menu" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
                        <X size={24} />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col space-y-2 px-3">
                    {navLinks.map(({ label, to, icon }, idx) => (
                        <li key={idx}>
                            <Link
                                href={to}
                                className={`block px-4 py-3 rounded-lg transition-colors ${pathname === to ? "bg-teal-50 text-teal-700 dark:bg-white/10 dark:text-teal-400" : "hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-white/10"}`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <p className='flex items-center'><span className='mx-1'>{icon}</span> <span>{label}</span></p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;
