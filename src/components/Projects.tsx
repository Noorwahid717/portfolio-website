'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import LiquidGlassCard from './ui/LiquidGlassCard'
import ProjectIllustration from './ui/ProjectIllustration'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const categories = ['Semua', 'Aplikasi Web', 'Mobile', 'AI/ML']

  const projects = [
    {
      id: 1,
      title: 'IntervueAI',
      description: 'Wawancara simulasi real-time dengan AI, tanpa form atau klik, hanya percakapan alami dan personal.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['Next.js', 'OpenAI', 'TypeScript', 'TailwindCSS'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Blendy',
      description: 'Aplikasi sosial di mana Anda dapat terhubung secara real-time, masuk dengan satu klik, berbagi momen, posting instan.',
      image: '/api/placeholder/600/400',
      category: 'Aplikasi Web',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'WATCHit',
      description: 'Aplikasi streaming video yang dibuat untuk hiburan personal yang mudah dan semua yang Anda suka untuk ditonton.',
      image: '/api/placeholder/600/400',
      category: 'Aplikasi Web',
      technologies: ['React', 'Express', 'AWS', 'Redis'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Platform E-commerce',
      description: 'Solusi e-commerce full-stack dengan UI/UX modern dan integrasi pembayaran yang aman.',
      image: '/api/placeholder/600/400',
      category: 'Aplikasi Web',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Mobile Fitness Tracker',
      description: 'Aplikasi mobile lintas platform untuk pelacakan kebugaran dengan analitik real-time.',
      image: '/api/placeholder/600/400',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Charts.js', 'Expo'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'Platform pembuatan konten canggih yang didukung oleh algoritma machine learning.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      github: '#',
      demo: '#',
      featured: false,
    },
  ]

  const filteredProjects = activeCategory === 'Semua' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Portfolio <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Showcase</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Jelajahi perjalanan saya melalui proyek, sertifikasi, dan keahlian teknis.
              Setiap bagian mewakili pencapaian dalam jalur pembelajaran berkelanjutan saya.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'glass-input text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <LiquidGlassCard delay={index * 0.1}>
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-xl mb-4 group-hover:shadow-2xl transition-shadow duration-300">
                    <ProjectIllustration 
                      projectName={project.title}
                      category={project.category}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-xl">
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors shadow-lg"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* See More Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300"
            >
              Lihat Proyek Lainnya
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
