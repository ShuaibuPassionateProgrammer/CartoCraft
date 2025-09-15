import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle theme"
                type="button"
                disabled
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <button
            onClick={() => {
                const newTheme = currentTheme === "light" ? "dark" : "light";
                setTheme(newTheme);
            }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
            type="button"
        >
            {currentTheme === "light" ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
        </button>
    );
};

export default ThemeToggle;