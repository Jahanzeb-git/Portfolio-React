import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface CertificationProps {
  title: string;
  organization: string;
  date: string;
  image: string;
  verificationLink: string;
}

const Certification: React.FC<CertificationProps> = ({
  title,
  organization,
  date,
  image,
  verificationLink,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{organization}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{date}</p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={verificationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        <span>Verify Certificate</span>
      </motion.a>
    </motion.div>
  );
};

const certifications = [
  {
    title: "Data Science Professional Certificate",
    organization: "IBM",
    date: "2023",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    verificationLink: "https://www.credential.net/example1",
  },
  {
    title: "Machine Learning Specialization",
    organization: "Stanford Online",
    date: "2023",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    verificationLink: "https://www.credential.net/example2",
  },
  {
    title: "Deep Learning Specialization",
    organization: "DeepLearning.AI",
    date: "2022",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=800",
    verificationLink: "https://www.credential.net/example3",
  },
];

export default function About() {
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

          <main className="container mx-auto px-4 pt-32 pb-16 relative">
            <div className="max-w-6xl mx-auto">
              {/* Profile Section */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-64 h-64 rounded-full overflow-hidden shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                    alt="Jahanzeb Ahmed"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1"
                >
                  <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200 bg-clip-text text-transparent">
                    About Me
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    As a Data Scientist with over 5 years of experience, I specialize in developing 
                    machine learning solutions that drive business value. My expertise spans across 
                    predictive analytics, natural language processing, and computer vision, with a 
                    proven track record of implementing successful AI initiatives in various industries.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Education</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    Master of Science in Data Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Stanford University
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2018 - 2020
                  </p>
                </div>
              </motion.div>

              {/* Experience Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Experience</h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    Senior Data Scientist
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tech Innovation Labs
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    2020 - Present
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Led a team of data scientists in developing predictive models</li>
                    <li>Implemented ML pipelines that improved efficiency by 40%</li>
                    <li>Collaborated with cross-functional teams to deliver AI solutions</li>
                  </ul>
                </div>
              </motion.div>

              {/* Certifications Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6 dark:text-white">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                    >
                      <Certification {...cert} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}