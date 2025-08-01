"use client";

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Globe } from 'lucide-react';

export default function Floating3DCards() {
  const cards = [
    {
      icon: Code,
      title: "Development",
      color: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: Palette,
      title: "Design",
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: Zap,
      title: "Performance",
      color: "from-yellow-500 to-orange-500",
      delay: 0.4,
    },
    {
      icon: Globe,
      title: "Deployment",
      color: "from-green-500 to-emerald-500",
      delay: 0.6,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: card.delay,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -10, 
              rotateX: 10,
              rotateY: 5,
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="group perspective-1000"
          >
            <div className="relative transform-gpu">
              {/* Card Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-xl blur-xl transform translate-y-4 group-hover:translate-y-2 transition-transform duration-300" />
              
              {/* Main Card */}
              <div className={`relative p-6 rounded-xl bg-gradient-to-br ${card.color} backdrop-blur-sm border border-white/20 transform-gpu`}>
                {/* Glossy Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-white font-semibold text-sm">
                    {card.title}
                  </h3>
                </div>
                
                {/* Particle Effects */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                      }}
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
