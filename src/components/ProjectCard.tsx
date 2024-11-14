import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demo?: string;
  source?: string;
  tags: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  demo,
  source,
  tags,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {demo && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}
          {source && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-green-500 text-green-500 dark:text-green-400 dark:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};