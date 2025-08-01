'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Cloud,
  GitBranch,
  Zap
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'GraphQL', level: 70 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 85 },
        { name: 'Supabase', level: 80 },
      ],
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 65 },
        { name: 'PWA', level: 90 },
      ],
    },
    {
      title: 'Desain',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'Illustrator', level: 70 },
        { name: 'Prototyping', level: 85 },
      ],
    },
    {
      title: 'DevOps',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vercel', level: 95 },
        { name: 'Netlify', level: 90 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 75 },
      ],
    },
  ]

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Git', icon: '📚' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Postman', icon: '📮' },
    { name: 'Slack', icon: '💬' },
    { name: 'Notion', icon: '📝' },
    { name: 'Jira', icon: '📊' },
    { name: 'Discord', icon: '🎮' },
  ]

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
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto px-4">
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
              Keahlian <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Saya</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Saya passionate dalam mempelajari teknologi baru dan tetap up-to-date 
              dengan tren terbaru dalam pengembangan web.
            </p>
            </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut', delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies I Use */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Tools & Teknologi yang Saya Gunakan Setiap Hari
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div className="text-sm font-medium text-gray-200">
                    {tool.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Code2, label: 'Baris Kode', value: '100K+' },
              { icon: GitBranch, label: 'Commits', value: '2K+' },
              { icon: Zap, label: 'Proyek', value: '50+' },
              { icon: Server, label: 'API Dibuat', value: '25+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-xl transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
