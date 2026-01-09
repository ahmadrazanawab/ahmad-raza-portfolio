"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Menu, X, Home, User, Zap, FolderOpen } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [activeLink, setActiveLink] = useState('/');
    const pathname = usePathname();

    const navLinks = [
        { label: "Home", to: "/", icon: Home },
        { label: "About", to: "/about", icon: User },
        { label: "Skills", to: "/skills", icon: Zap },
        { label: "Project", to: "/project", icon: FolderOpen },
        // { label: "Contact", to: "/contact", icon: Mail }
    ];

    const handleNavClick = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* Top Navbar */}
            <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-blue-50 via-white to-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg">
                                    <span className="text-white font-black text-lg">AR</span>
                                </div>
                                <span className="hidden sm:block text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                    Ahmad Raza
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
                            {navLinks.map(({ label, to, icon: Icon }, idx) => {
                                const isActive = pathname === to;
                                return (
                                    <li key={idx}>
                                        <Link
                                            href={to}
                                            onClick={handleNavClick}
                                            className={`relative group px-3 lg:px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${isActive
                                                    ? "text-teal-600 bg-teal-50"
                                                    : "text-gray-700 hover:text-teal-600 hover:bg-teal-50/50"
                                                }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            <span>{label}</span>
                                            <span
                                                className={`absolute bottom-0 left-3 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 ${isActive ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                                                    }`}
                                            />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* CTA Button - Desktop */}
                        <Link
                            href="/contact"
                            className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Get In Touch
                        </Link>

                        {/* Hamburger Icon - Mobile */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            aria-label="Open menu"
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <Menu className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-gradient-to-b from-blue-50 to-white border-l border-gray-200 shadow-2xl transform transition-transform duration-300 ease-out z-50 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900">Menu</h3>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        aria-label="Close menu"
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col space-y-2 p-4 sm:p-6">
                    {navLinks.map(({ label, to, icon: Icon }, idx) => {
                        const isActive = pathname === to;
                        return (
                            <li key={idx}>
                                <a
                                    href={to}
                                    onClick={handleNavClick}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${isActive
                                            ? "bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border border-teal-300/50"
                                            : "text-gray-700 hover:bg-gray-100 border border-transparent hover:border-gray-200"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{label}</span>
                                    {isActive && (
                                        <div className="ml-auto w-2 h-2 rounded-full bg-teal-500" />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA Button - Mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-gray-200 bg-white/50 backdrop-blur">
                    <a
                        href="/contact"
                        onClick={() => setIsSidebarOpen(false)}
                        className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;

// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';
// import { usePathname } from 'next/navigation';
// import { GoHome } from "react-icons/go";
// import { FaUser, FaTools, FaProjectDiagram } from "react-icons/fa";
// import { LuContactRound } from "react-icons/lu";
// const Navbar = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const pathname = usePathname();
//     console.log(pathname);
//     const navLinks = [
//         { label: "Home", to: "/", icon: <GoHome size={20} /> },
//         { label: "About", to: "/about", icon: <FaUser size={20} /> },
//         { label: "Skills", to: "/skills", icon: <FaTools size={20} /> },
//         { label: "Project", to: "/project", icon: <FaProjectDiagram size={20} /> },
//         { label: "Contact Me", to: "/contact", icon: <LuContactRound size={20} /> }
//     ];

//     return (
//         <>
//             {/* Top Navbar */}
//             <nav className='flex fixed inset-x-0 top-0 justify-between items-center px-4 md:px-6 h-16 md:h-20 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
//                 <Link href="/" className='text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>Ahmad Raza</Link>

//                 {/* Hamburger Icon for Mobile/Desktop */}
//                 <button onClick={() => setIsSidebarOpen(true)} aria-label="Open menu" className="block md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
//                     <Menu size={28} />
//                 </button>

//                 {/* Desktop Nav Links */}
//                 <ul className="hidden md:flex items-center gap-1">
//                     {navLinks.map(({ label, to }, idx) => {
//                         const isActive = pathname === to;
//                         return (
//                             <li key={idx} className="mx-1">
//                                 <Link
//                                     href={to}
//                                     className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors
//                                             ${isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"}
//                                                 after:content-['']
//                                                 after:absolute after:left-3 after:-bottom-1
//                                                 after:h-[2px] after:w-0 after:bg-teal-600
//                                                 after:transition-all after:duration-300
//                                                 hover:after:w-[calc(100%-1.5rem)]`}>
//                                     {label}
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                 </ul>

//             </nav>

//             {/* Sidebar - Slide in from right */}
//             <div
//                 className={`fixed top-0 right-0 h-full w-72 max-w-[80%] bg-white/95 dark:bg-neutral-900/95 text-gray-800 dark:text-gray-100 border-l border-black/5 dark:border-white/10 shadow-xl transform transition-transform duration-300 ease-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
//             >
//                 {/* Close Icon */}
//                 <div className="flex justify-end py-4 px-4">
//                     <button onClick={() => setIsSidebarOpen(false)} aria-label="Close menu" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
//                         <X size={24} />
//                     </button>
//                 </div>

//                 {/* Sidebar Links */}
//                 <ul className="flex flex-col space-y-2 px-3">
//                     {navLinks.map(({ label, to, icon }, idx) => (
//                         <li key={idx}>
//                             <Link
//                                 href={to}
//                                 className={`block px-4 py-3 rounded-lg transition-colors ${pathname === to ? "bg-teal-50 text-teal-700 dark:bg-white/10 dark:text-teal-400" : "hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-white/10"}`}
//                                 onClick={() => setIsSidebarOpen(false)}
//                             >
//                                 <p className='flex items-center'><span className='mx-1'>{icon}</span> <span>{label}</span></p>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Overlay when sidebar is open */}
//             {isSidebarOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/40 z-40"
//                     onClick={() => setIsSidebarOpen(false)}
//                 />
//             )}
//         </>
//     );
// };

// export default Navbar;
