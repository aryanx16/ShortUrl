import { motion } from 'framer-motion';
import {   Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="py-8 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            © 2025 ShortURL. All rights reserved.
                        </div>

                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1 }}
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                <Link to={"https://github.com/aryanx16/ShortUrl"}>
                                <Github className="w-5 h-5" />
                                </Link>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
