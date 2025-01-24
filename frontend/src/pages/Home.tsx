import { motion } from 'framer-motion';
import { Copy, } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeFeatures from '../components/HomeFeatures';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const HomePage = () => {
  const [bigurl, setBigUrl] = useState('');
  const [shorturl, setShortUrl] = useState('');

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log("dkjf")
      const response = await axios.post(`${BACKEND_URL}`, { url: bigurl });
      console.log(response);
      setShortUrl(response.data.shorturl);
      toast.success('Short URL created successfully!');
    } catch (e) {
      console.error('Error:', e);
      toast.error('Failed to shorten URL. Please try again.');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shorturl);
    toast.success('Short URL copied to clipboard!');
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 dark:bg-gray-900">
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
          <div>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                value={bigurl}
                onChange={(e) => setBigUrl(e.target.value)}
                placeholder="Paste your long URL here..."
                className="flex-1 p-4 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Shorten URL
              </motion.button>
            </form>

            {shorturl && (
              <div className="dark:text-white justify-center items-center pt-8 flex flex-col gap-4">
                <div className="text-2xl font-semibold">Your Shortened URL</div>
                <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div
                    className="text-blue-600 dark:text-blue-400 font-medium "
                  >
                    {shorturl}
                  </div>
                  <motion.button
                    onClick={handleCopy}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                  >
                    <Copy className="w-5 h-5" />
                    Copy
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <HomeFeatures />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
