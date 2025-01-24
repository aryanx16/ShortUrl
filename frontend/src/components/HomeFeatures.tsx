import React from 'react'
import { motion } from 'framer-motion';
import {  Link, Copy, ChevronRight } from 'lucide-react';
const HomeFeatures = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      };
  return (
    <div>
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
          description: "All shortened URLs are protected",
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
    </div>
  )
}

export default HomeFeatures
