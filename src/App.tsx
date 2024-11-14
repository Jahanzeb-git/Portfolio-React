import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Notes from './pages/Notes';
import Neurons from './pages/Neurons';
import Contact from './pages/Contact';
import { ThemeToggle } from './components/ThemeToggle';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/neurons" element={<Neurons />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);

  // On mount, check localStorage to set the theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setIsDark(savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('light'); // Ensure light is default
      setIsDark(false);
    }
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = prev ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      return !prev;
    });
  };

  return (
    <Router>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
