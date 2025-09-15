"use client";

import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative w-full bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col items-center text-center">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Build Smarter with <span className="text-blue-600 dark:text-blue-400">Cartolinks</span>
                </h1>

                {/* Subheading */}
                <div className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                    Delivering pixel-perfect web & mobile solutions with modern technologies.
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link 
                        href="#get-started"
                        className="px-6 py-3 rounded-xl text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition font-medium">
                        Get Started
                    </Link>
                    <Link
                        href="#features"
                        className="px-6 py-3 rounded-xl text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition font-medium">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;