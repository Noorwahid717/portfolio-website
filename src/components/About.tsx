'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Rocket, Users } from 'lucide-react'
import LiquidGlassCard from './ui/LiquidGlassCard'
import ParticleBrain from './ui/ParticleBrain'
import Floating3DCards from './ui/Floating3DCards'

export default function About() {
  const features = [
    {
      icon: Code,
      title: 'Kode Bersih',
      description: 'Menulis kode yang mudah dipelihara, dapat diskalakan, dan efisien adalah passion saya.',
    },
    {
      icon: Palette,
      title: 'Desain Kreatif',
      description: 'Menggabungkan estetika dengan fungsionalitas untuk menciptakan antarmuka yang indah.',
    },
    {
      icon: Rocket,
      title: 'Performa Cepat',
      description: 'Mengoptimalkan aplikasi untuk kecepatan dan pengalaman pengguna yang mulus.',
    },
    {
      icon: Users,
      title: 'Tim Player',
      description: 'Berkolaborasi secara efektif dengan tim lintas fungsi untuk memberikan hasil.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Tentang <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Saya</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Saya seorang full-stack developer yang passionate dengan keahlian dalam menciptakan 
              solusi digital yang menggabungkan teknologi mutakhir dengan desain yang indah.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* AI Brain Visualization */}
            <motion.div variants={itemVariants} className="relative">
              <ParticleBrain />
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants}>
              <LiquidGlassCard>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Menciptakan Pengalaman Digital
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Perjalanan saya dalam pengembangan web dimulai dengan passion untuk menciptakan 
                  pengalaman interaktif yang mendorong batas-batas kemungkinan 
                  di web. Saya mengkhususkan diri dalam teknologi modern dan pengalaman web 3D.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Dari aplikasi bertenaga AI hingga antarmuka 3D yang imersif, saya percaya 
                  dalam menciptakan solusi yang tidak hanya fungsional, tetapi benar-benar menarik 
                  dan berkesan.
                </p>
                
                {/* Achievement Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">50+</div>
                    <div className="text-xs text-gray-400">Proyek 3D</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5+</div>
                    <div className="text-xs text-gray-400">Tahun Pengalaman</div>
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          </div>

          {/* 3D Floating Cards */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Keahlian Inti
            </h3>
            <Floating3DCards />
          </motion.div>

          {/* Enhanced Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative"
              >
                <LiquidGlassCard delay={index * 0.1}>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 mx-auto">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
