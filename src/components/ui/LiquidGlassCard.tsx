"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function LiquidGlassCard({ children, className = '', delay = 0 }: LiquidGlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`relative group ${className}`}
    >
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
        {/* Animated Liquid Effect */}
        <motion.div
          className="absolute -inset-10 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, #ec4899 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Glass Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.div>
  );
}
