import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Send } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

export default function Contact() {
  const [isDark, setIsDark] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  React.useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(darkMode);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-gray-900">
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-transparent dark:from-green-800/30 backdrop-blur-3xl"
          />

          <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

          <PageTransition>
            <main className="container mx-auto px-4 pt-32 pb-16 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200 bg-clip-text text-transparent">
                  Get in Touch
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Let's connect and discuss how we can work together.
                </p>
              </motion.div>

              <div className="max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
                        required
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Or connect with me on LinkedIn</p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/jahanzebahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </motion.a>
                </motion.div>
              </div>
            </main>
          </PageTransition>

          <Footer />
        </div>
      </div>
    </div>
  );
}