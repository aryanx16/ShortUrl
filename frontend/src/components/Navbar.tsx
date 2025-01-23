import  { useState } from 'react'
import { Sun, Moon, Link, } from 'lucide-react';
import { motion } from 'framer-motion';


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center space-x-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        <Link className="w-6 h-6 text-gray-900 dark:text-white" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            ShortURL
                        </span>
                    </motion.div>

                    <div className="flex items-center space-x-6">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                        >
                            <Sun className="w-5 h-5 text-yellow-400 hidden dark:block" />
                            <Moon className="w-5 h-5 text-gray-700 dark:hidden" />
                        </motion.button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
