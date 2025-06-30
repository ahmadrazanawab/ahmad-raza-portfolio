import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    const navLinks = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Skills", to: "/skills" },
        { label: "Project", to: "/project" },
        { label: "Contact Me", to: "/contact" }
    ]
    return (
        <section>
            <ul className="bg-gray-50 h-20 shadow-md flex items-center ">
                {
                    navLinks.map(({ label, to }, idx) => (
                        <li key={idx} className="mx-3">
                            <Link href={to} className="text-md md:text-lg text-gray-900">{label}</Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Navbar
