import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

interface NeuronCardProps {
  title: string;
  description: string;
}

const NeuronCard: React.FC<NeuronCardProps> = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
        className="w-12 h-12 mb-4 text-green-500 dark:text-green-400"
      >
        <Brain className="w-full h-full" />
      </motion.div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const neurons = [
  {
    title: "The Power of Data",
    description: "Data is not just numbers; it's the story of human behavior and patterns waiting to be discovered.",
  },
  {
    title: "AI Ethics",
    description: "With great power comes great responsibility. AI must be developed with human values at its core.",
  },
  {
    title: "Learning Systems",
    description: "The best AI systems are those that can learn and adapt, just like the human brain.",
  },
  {
    title: "Pattern Recognition",
    description: "The ability to recognize patterns is the foundation of both human and artificial intelligence.",
  },
  {
    title: "Innovation Through Data",
    description: "True innovation comes from understanding the patterns hidden within complex data.",
  },
  {
    title: "Future of AI",
    description: "The future belongs to those who can bridge the gap between human intuition and machine intelligence.",
  },
  {
    title: "Data-Driven Decisions",
    description: "The best decisions are made when data and human intuition work together.",
  },
  {
    title: "Continuous Learning",
    description: "In the field of AI, if you're not learning, you're falling behind.",
  },
  {
    title: "Problem Solving",
    description: "Every complex problem has a solution hidden in the data; we just need to find it.",
  },
  {
    title: "AI Impact",
    description: "AI will not replace humans; it will amplify human capabilities and creativity.",
  },
];

export default function Neurons() {
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
                  Discover my Neurons
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Exploring thoughts, ideas, and insights about data science and artificial intelligence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {neurons.map((neuron, index) => (
                  <motion.div
                    key={neuron.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <NeuronCard {...neuron} />
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