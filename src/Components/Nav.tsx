
import logo from "../assets/logo-text.png"

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b border-gray-100 bg-white sticky top-0">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-700 lg:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                
                <div className="flex items-center gap-2">

                    <img src={logo} alt="" />
                </div>

               
                <ul className="hidden items-center gap-8 lg:flex">
                    {NAV_LINKS.map((link, index) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className={`text-sm font-medium ${index === 0
                                        ? "text-pink-600"
                                        : "text-gray-700 hover:text-pink-600"
                                    }`}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                
                <div className="hidden items-center gap-6 lg:flex">
                    <a href="#signin" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sign In
                    </a>
                    <a
                        href="#signup"
                        className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white hover:bg-pink-700"
                    >
                        Sign Up
                    </a>
                </div>

                
                <div className="flex items-center gap-2 lg:hidden">
                    <a href="#signin" className=" px-3 text-sm font-semibold text-black-600 hover:bg-pink-50" > Sign In </a>

                    <a href="#signup" className="rounded-full bg-pink-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-pink-700" > Sign Up </a>


                </div>
            </div>

            
            {isOpen && (
                <div className="border-t border-gray-100 px-4 pb-4 lg:hidden">
                    <ul className="flex flex-col gap-4 pt-4">
                        {NAV_LINKS.map((link, index) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className={`block text-sm font-medium ${index === 0 ? "text-pink-600" : "text-gray-700"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#signin"
                                className="block text-sm font-medium text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign In
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}



