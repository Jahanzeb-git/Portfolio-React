import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

interface NoteCardProps {
  title: string;
  description: string;
  link: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, description, link }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        <span>Read Note</span>
      </motion.a>
    </motion.div>
  );
};

const notes = [
  {
    title: "Deep Learning Fundamentals",
    description: "A comprehensive guide to understanding neural networks and their applications.",
    link: "https://medium.com/@jahanzebahmed/deep-learning-fundamentals",
  },
  {
    title: "Machine Learning Pipeline Design",
    description: "Best practices for building scalable ML pipelines in production.",
    link: "https://medium.com/@jahanzebahmed/ml-pipeline-design",
  },
  {
    title: "Natural Language Processing Techniques",
    description: "Advanced NLP techniques for text analysis and understanding.",
    link: "https://medium.com/@jahanzebahmed/nlp-techniques",
  },
  {
    title: "Data Visualization Best Practices",
    description: "Creating effective and insightful data visualizations.",
    link: "https://medium.com/@jahanzebahmed/data-viz",
  },
  {
    title: "Time Series Analysis",
    description: "Understanding temporal data patterns and forecasting methods.",
    link: "https://medium.com/@jahanzebahmed/time-series",
  },
  {
    title: "Feature Engineering Tips",
    description: "Advanced techniques for creating meaningful features.",
    link: "https://medium.com/@jahanzebahmed/feature-engineering",
  },
  {
    title: "Model Deployment Strategies",
    description: "Guide to deploying ML models in production environments.",
    link: "https://medium.com/@jahanzebahmed/model-deployment",
  },
  {
    title: "Data Ethics and AI",
    description: "Exploring ethical considerations in AI development.",
    link: "https://medium.com/@jahanzebahmed/ai-ethics",
  },
  {
    title: "Computer Vision Applications",
    description: "Real-world applications of computer vision technology.",
    link: "https://medium.com/@jahanzebahmed/cv-applications",
  },
  {
    title: "MLOps Best Practices",
    description: "Building and maintaining ML systems at scale.",
    link: "https://medium.com/@jahanzebahmed/mlops",
  },
];

export default function Notes() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(darkMode);
  }, []);

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
                  My Notes
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Exploring data science concepts through detailed technical articles and tutorials.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {notes.map((note, index) => (
                  <motion.div
                    key={note.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <NoteCard {...note} />
                  </motion.div>
                ))}
              </div>
            </main>
          </PageTransition>

          <Footer />
        </div>
      </div>
    </div>
  );
}