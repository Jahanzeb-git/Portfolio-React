import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';

const projects = [
  {
    title: 'AI-Powered Data Analysis',
    description: 'Advanced data analysis platform using machine learning algorithms for predictive analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    demo: 'https://demo.example.com',
    source: 'https://github.com/example',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
  },
  {
    title: 'Neural Network Visualizer',
    description: 'Interactive visualization tool for understanding neural network architectures and data flow.',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=800',
    demo: 'https://demo.example.com',
    source: 'https://github.com/example',
    tags: ['D3.js', 'PyTorch', 'TypeScript'],
  },
  {
    title: 'Time Series Forecasting',
    description: 'Real-time forecasting system for financial markets using advanced statistical models.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800',
    demo: 'https://demo.example.com',
    source: 'https://github.com/example',
    tags: ['R', 'Pandas', 'Docker'],
  },
  {
    title: 'NLP Document Analyzer',
    description: 'Natural language processing tool for automated document classification and sentiment analysis.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    demo: 'https://demo.example.com',
    source: 'https://github.com/example',
    tags: ['BERT', 'FastAPI', 'MongoDB'],
  },
  {
    title: 'Computer Vision Platform',
    description: 'Real-time object detection and tracking system using state-of-the-art computer vision algorithms.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800',
    demo: 'https://demo.example.com',
    source: 'https://github.com/example',
    tags: ['OpenCV', 'YOLO', 'Kubernetes'],
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(darkMode);
  }, []);

  if (!mounted) return null;

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

          <main className="container mx-auto px-4 pt-32 pb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200 bg-clip-text text-transparent">
                Data Science Portfolio
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Transforming complex data into actionable insights through innovative solutions
                and cutting-edge technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}