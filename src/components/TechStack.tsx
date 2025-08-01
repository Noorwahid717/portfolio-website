"use client";

import { motion } from 'framer-motion';
import LiquidGlassCard from './ui/LiquidGlassCard';
import TechIcon from './ui/TechIcon';
import TechTooltip from './ui/TechTooltip';
import { 
  Monitor,
  Server,
  Settings,
  Smartphone
} from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"]
    },
    {
      category: "Backend", 
      icon: Server,
      color: "from-green-500 to-emerald-500",
      techs: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Tools & Platform",
      icon: Settings,
      color: "from-purple-500 to-pink-500",
      techs: ["Git", "Docker", "AWS", "Vercel", "Firebase"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      techs: ["React Native", "Expo", "Flutter"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Teknologi Stack
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Teknologi dan tools yang saya gunakan untuk mewujudkan ide menjadi kenyataan
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {technologies.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="relative"
              >
                <LiquidGlassCard delay={index * 0.1}>
                  <div className="text-center">
                    {/* Category Header with Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}>
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {category.category}
                      </h3>
                    </div>
                    
                    {/* Tech Items */}
                    <div className="space-y-2">
                      {category.techs.map((tech, techIndex) => (
                        <TechTooltip key={tech} tech={tech}>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(255, 255, 255, 0.15)"
                            }}
                            className="relative flex items-center text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group overflow-hidden"
                          >
                            {/* Tech Icon and Name */}
                            <TechIcon name={tech} className="w-4 h-4 mr-2 z-10 relative" />
                            <span className="z-10 relative">{tech}</span>
                            
                            {/* Hover Particle Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {[...Array(3)].map((_, particleIndex) => (
                                <motion.div
                                  key={particleIndex}
                                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                  animate={{
                                    x: [0, Math.random() * 30 - 15],
                                    y: [0, Math.random() * 20 - 10],
                                    opacity: [0, 1, 0],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: particleIndex * 0.2,
                                  }}
                                  style={{
                                    left: '50%',
                                    top: '50%',
                                  }}
                                />
                              ))}
                            </div>
                            
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        </TechTooltip>
                      ))}
                    </div>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
