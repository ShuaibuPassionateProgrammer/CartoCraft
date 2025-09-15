"use client";

import { Code, Smartphone, Cloud } from "lucide-react";


const Features = () => {
    const features = [
        {
            title: "Modern Web Apps",
            description: "Pixel-perfect, responsive, and blazing fast web applications with Next.js and Tailwind CSS.",
            icon: Code,
        },
        {
            title: "Mobile Development",
            description: "Cross-platform mobile apps with React Native & Expo for seamless user experiences.",
            icon: Smartphone,
        },
        {
            title: "Cloud Ready",
            description: "Deployed on scalable platforms like Vercel, Netlify, and cloud providers for high availability.",
            icon: Cloud,
        },
    ];

    return (
        <section id="features" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Features
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        Explore the powerful features we provide to accelerate your projects.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 hover:shadow-lg transition">
                            <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;