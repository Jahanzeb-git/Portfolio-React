import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showSocial, setShowSocial] = useState(false);
  const socialMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        socialMenuRef.current &&
        buttonRef.current &&
        !socialMenuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowSocial(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/jahanzebahmed',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/jahanzebahmed',
    },
    {
      name: 'WhatsApp',
      icon: <MessageSquare className="w-5 h-5" />,
      url: 'https://wa.me/yourwhatsappnumber',
    },
  ];

  return (
    <footer className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 Portfolio by Jahanzeb Ahmed. All Rights Reserved
          </p>
          <div className="relative">
            <motion.button
              ref={buttonRef}
              onClick={() => setShowSocial(!showSocial)}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              Elsewhere
            </motion.button>
            <AnimatePresence>
              {showSocial && (
                <motion.div
                  ref={socialMenuRef}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full mb-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 min-w-[200px]"
                >
                  <div className="flex flex-col space-y-3">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        whileHover={{ x: 5 }}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </footer>
  );
};