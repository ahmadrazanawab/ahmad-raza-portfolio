"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // optional icons for toggle
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    console.log(pathname);
    const navLinks = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Skills", to: "/skills" },
        { label: "Project", to: "/project" },
        { label: "Contact Me", to: "/contact" }
    ];

    return (
        <>
            {/* Top Navbar */}
            <nav className='flex justify-between px-6 bg-[#E9E8E6] h-20 shadow-md items-center'>
                <Link href="/" className='text-xl font-bold'>Ahmad Raza</Link>

                {/* Hamburger Icon for Mobile/Desktop */}
                <button onClick={() => setIsSidebarOpen(true)} className="block md:hidden">
                    <Menu size={28} />
                </button>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex">
                    {navLinks.map(({ label, to }, idx) => {
                        const isActive = pathname === to;
                        return (
                            <li key={idx} className="mx-4">
                                <Link
                                    href={to}
                                    className={`relative text-lg
                                            ${isActive ? "text-[#34B7A7] underline" : "text-[#444444]"}
                                                after:content-['']
                                                after:absolute after:left-0 after:bottom-0
                                                after:h-[2px] after:w-0 after:bg-[#34B7A7]
                                                after:transition-all after:duration-300
                                                hover:after:w-full hover:text-[#34B7A7] 
                                            `}>
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

            </nav>

            {/* Sidebar - Slide in from right */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800 shadow-lg transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Icon */}
                <div className="flex justify-end py-4">
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col  space-y-4">
                    {navLinks.map(({ label, to }, idx) => (
                        <li key={idx}>
                            <Link
                                href={to}
                                className={`block py-2 px-4 rounded-b-md ${pathname === to ? "bg-gray-100 text-[#34B7A7]" : ""} border-b border-gray-700`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-30 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;
