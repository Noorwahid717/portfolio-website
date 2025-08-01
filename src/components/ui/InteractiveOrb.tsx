"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (orbRef.current) {
        const rect = orbRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        
        orbRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) rotateX(${deltaY * 0.5}deg) rotateY(${deltaX * 0.5}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed top-20 right-20 pointer-events-none z-10 hidden lg:block">
      <motion.div
        ref={orbRef}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-32 h-32"
      >
        {/* Main Orb */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-500/40 to-pink-500/30 backdrop-blur-sm border border-white/20 shadow-2xl">
          {/* Inner Glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent animate-pulse" />
          
          {/* Particle Effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: '50%',
                  top: '50%',
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Outer Ring */}
        <motion.div
          className="absolute -inset-4 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Glow Effect */}
        <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 blur-xl" />
      </motion.div>
    </div>
  );
}
