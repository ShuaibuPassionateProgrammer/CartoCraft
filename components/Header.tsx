"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";


const Header = () => {
    return (
        <header className="w-full sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                        CartoCraft
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                            Features
                        </Link>

                        <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                            About
                        </Link>

                        <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                            Contact
                        </Link>
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;