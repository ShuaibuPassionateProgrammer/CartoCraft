"use client";

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-center gap-4">
                {/* Left */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} CartoCraft Solutions LTD. All rights reserved.
                </p>

                {/* Right */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Built with <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js</span> &{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Tailwind CSS</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;