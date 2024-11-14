import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Work', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Notes', path: '/notes' },
    { name: 'My Neurons', path: '/neurons' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 backdrop-blur-lg bg-white/10 dark:bg-black/10'
          : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold dark:text-white"
          >
            <Link to="/">JA</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <motion.div key={link.name} whileHover={{ scale: 1.1 }}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'px-3 py-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10'
                      : ''
                  } ${
                    isDark ? 'text-white hover:text-green-300' : 'text-gray-800 hover:text-green-700'
                  } ${
                    location.pathname === link.path ? 'text-green-500 dark:text-green-400' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {links.map((link) => (
                  <motion.div key={link.name} whileHover={{ x: 10 }}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-sm font-medium px-4 py-2 rounded-lg ${
                        isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-black/10'
                      } ${
                        location.pathname === link.path ? 'text-green-500 dark:text-green-400' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};