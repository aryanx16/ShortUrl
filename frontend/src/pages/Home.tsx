import { motion } from 'framer-motion';
import {  Link, Copy, ChevronRight, Github } from 'lucide-react';
import Navbar from '../components/Navbar';

const HomePage = () => {


  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
  {/* Navbar */}
  <Navbar />

  {/* Hero Section */}
  <motion.section
    className="container mx-auto px-6 py-16 text-center"
    initial="initial"
    animate="animate"
    variants={fadeIn}
  >
    <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
      Shorten Your Long URLs
    </h1>
    <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
      Create short, memorable links in seconds
    </p>

    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Paste your long URL here..."
          className="flex-1 p-4 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
        >
          Shorten URL
        </motion.button>
      </div>
    </motion.div>
  </motion.section>

  {/* Features Section */}
  <motion.section
    className="container mx-auto px-6 py-16"
    initial="initial"
    animate="animate"
    variants={fadeIn}
  >
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      Why Choose ShortURL?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Fast & Simple",
          description: "Create short URLs in seconds with our intuitive interface",
          icon: <ChevronRight className="w-6 h-6" />,
        },
        {
          title: "Track Analytics",
          description: "Monitor your link performance with detailed statistics",
          icon: <Copy className="w-6 h-6" />,
        },
        {
          title: "Secure Links",
          description: "All shortened URLs are encrypted and protected",
          icon: <Link className="w-6 h-6" />,
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="mb-4 text-blue-600 dark:text-blue-400">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.section>

  {/* Footer */}
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
            <Github className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </div>
  </footer>
</div>

  );
};

export default HomePage;