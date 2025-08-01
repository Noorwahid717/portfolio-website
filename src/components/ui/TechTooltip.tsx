"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface TechTooltipProps {
  tech: string;
  children: React.ReactNode;
}

export default function TechTooltip({ tech, children }: TechTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const getTooltipInfo = (techName: string) => {
    const lowerName = techName.toLowerCase();
    
    const tooltips: Record<string, string> = {
      'react': 'JavaScript library for building user interfaces',
      'next.js': 'React framework for production-ready applications',
      'typescript': 'Typed superset of JavaScript',
      'tailwindcss': 'Utility-first CSS framework',
      'framer motion': 'Production-ready motion library for React',
      'node.js': 'JavaScript runtime built on Chrome\'s V8 engine',
      'express': 'Fast, unopinionated web framework for Node.js',
      'postgresql': 'Advanced open source relational database',
      'mongodb': 'Document-based NoSQL database',
      'redis': 'In-memory data structure store',
      'git': 'Distributed version control system',
      'docker': 'Containerization platform',
      'aws': 'Amazon Web Services cloud platform',
      'vercel': 'Platform for frontend deployment',
      'firebase': 'Google\'s mobile and web development platform',
      'react native': 'Framework for building native mobile apps',
      'expo': 'Platform for universal React applications',
      'flutter': 'Google\'s UI toolkit for cross-platform apps'
    };

    return tooltips[lowerName] || 'Popular development technology';
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
          >
            <div className="bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-white/20 whitespace-nowrap max-w-xs">
              <div className="font-semibold">{tech}</div>
              <div className="text-gray-300 mt-1">{getTooltipInfo(tech)}</div>
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-black/90 border-r border-b border-white/20 transform rotate-45"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
