"use client";

import { 
  Brain, 
  Users, 
  Play, 
  ShoppingCart, 
  Smartphone, 
  Cpu,
  Globe,
  Zap
} from 'lucide-react';

interface ProjectIllustrationProps {
  projectName: string;
  category: string;
  className?: string;
}

export default function ProjectIllustration({ projectName, category, className = "w-full h-full" }: ProjectIllustrationProps) {
  const getProjectConfig = (name: string, cat: string) => {
    const lowerName = name.toLowerCase();
    
    // Specific project configurations
    const configs: Record<string, any> = {
      'intervueai': {
        icon: Brain,
        gradient: 'from-purple-600 via-blue-600 to-indigo-700',
        accent: 'from-purple-400 to-blue-400',
        particles: 8,
        pattern: 'ai'
      },
      'blendy': {
        icon: Users,
        gradient: 'from-pink-600 via-rose-600 to-red-700',
        accent: 'from-pink-400 to-rose-400',
        particles: 6,
        pattern: 'social'
      },
      'watchit': {
        icon: Play,
        gradient: 'from-orange-600 via-red-600 to-pink-700',
        accent: 'from-orange-400 to-red-400',
        particles: 5,
        pattern: 'media'
      },
      'e-commerce platform': {
        icon: ShoppingCart,
        gradient: 'from-green-600 via-emerald-600 to-teal-700',
        accent: 'from-green-400 to-emerald-400',
        particles: 7,
        pattern: 'commerce'
      },
      'mobile fitness tracker': {
        icon: Smartphone,
        gradient: 'from-blue-600 via-cyan-600 to-teal-700',
        accent: 'from-blue-400 to-cyan-400',
        particles: 6,
        pattern: 'mobile'
      },
      'ai content generator': {
        icon: Cpu,
        gradient: 'from-violet-600 via-purple-600 to-indigo-700',
        accent: 'from-violet-400 to-purple-400',
        particles: 9,
        pattern: 'ai'
      }
    };

    // Default config based on category
    const categoryDefaults: Record<string, any> = {
      'ai/ml': {
        icon: Brain,
        gradient: 'from-purple-600 via-blue-600 to-indigo-700',
        accent: 'from-purple-400 to-blue-400',
        particles: 8,
        pattern: 'ai'
      },
      'web apps': {
        icon: Globe,
        gradient: 'from-blue-600 via-indigo-600 to-purple-700',
        accent: 'from-blue-400 to-indigo-400',
        particles: 6,
        pattern: 'web'
      },
      'mobile': {
        icon: Smartphone,
        gradient: 'from-green-600 via-teal-600 to-cyan-700',
        accent: 'from-green-400 to-teal-400',
        particles: 5,
        pattern: 'mobile'
      }
    };

    return configs[lowerName] || categoryDefaults[cat.toLowerCase()] || {
      icon: Zap,
      gradient: 'from-gray-600 via-slate-600 to-gray-700',
      accent: 'from-gray-400 to-slate-400',
      particles: 5,
      pattern: 'default'
    };
  };

  const config = getProjectConfig(projectName, category);
  const Icon = config.icon;

  const renderPattern = (pattern: string) => {
    switch (pattern) {
      case 'ai':
        return (
          <>
            {/* AI Neural Network Pattern */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-white rounded-full animate-pulse ${
                    i % 4 === 1 ? 'animate-delay-1' : 
                    i % 4 === 2 ? 'animate-delay-2' : 
                    i % 4 === 3 ? 'animate-delay-3' : ''
                  }`}
                  style={{
                    left: `${20 + (i % 4) * 20}%`,
                    top: `${20 + Math.floor(i / 4) * 20}%`
                  }}
                />
              ))}
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <line x1="20%" y1="20%" x2="40%" y2="40%" stroke="white" strokeWidth="1" opacity="0.3" />
                <line x1="40%" y1="20%" x2="60%" y2="40%" stroke="white" strokeWidth="1" opacity="0.3" />
                <line x1="60%" y1="20%" x2="80%" y2="40%" stroke="white" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
          </>
        );
      case 'social':
        return (
          <div className="absolute inset-0 opacity-15">
            {/* Social Connection Circles */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full animate-bounce" />
            <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full animate-bounce animate-delay-1" />
            <div className="absolute bottom-4 left-8 w-10 h-10 bg-white rounded-full animate-bounce animate-delay-2" />
            <div className="absolute bottom-4 right-8 w-7 h-7 bg-white rounded-full animate-bounce animate-delay-3" />
          </div>
        );
      case 'media':
        return (
          <div className="absolute inset-0 opacity-20">
            {/* Media Waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-white rounded-full animate-ping" />
              <div className="absolute w-12 h-12 border-2 border-white rounded-full animate-ping animate-delay-1" />
              <div className="absolute w-6 h-6 bg-white rounded-full" />
            </div>
          </div>
        );
      case 'commerce':
        return (
          <div className="absolute inset-0 opacity-15">
            {/* Shopping Icons */}
            <div className="absolute top-6 left-6 text-white text-2xl">💳</div>
            <div className="absolute top-6 right-6 text-white text-xl">📦</div>
            <div className="absolute bottom-6 left-6 text-white text-xl">🛒</div>
            <div className="absolute bottom-6 right-6 text-white text-2xl">💰</div>
          </div>
        );
      case 'mobile':
        return (
          <div className="absolute inset-0 opacity-20">
            {/* Mobile App Grid */}
            <div className="grid grid-cols-3 gap-2 p-4 h-full">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`bg-white rounded opacity-60 animate-pulse ${
                    i % 4 === 1 ? 'animate-delay-1' : 
                    i % 4 === 2 ? 'animate-delay-2' : 
                    i % 4 === 3 ? 'animate-delay-3' : ''
                  }`}
                />
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 opacity-20">
            {/* Default Geometric Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white transform rotate-45" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-full" />
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${config.gradient} ${className}`}>
      {/* Background Pattern */}
      {renderPattern(config.pattern)}
      
      {/* Main Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${config.accent} flex items-center justify-center shadow-2xl`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(config.particles)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full animate-float ${
              i % 4 === 1 ? 'animate-delay-1' : 
              i % 4 === 2 ? 'animate-delay-2' : 
              i % 4 === 3 ? 'animate-delay-3' : ''
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      
      {/* Tech Stack Indicator */}
      <div className="absolute bottom-2 left-2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-white/60 rounded-full" />
          <div className="w-2 h-2 bg-white/40 rounded-full" />
          <div className="w-2 h-2 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
