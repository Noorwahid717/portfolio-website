"use client";

import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  GitBranch, 
  Cloud, 
  Smartphone, 
  Zap, 
  FileCode, 
  Palette, 
  Layers, 
  Boxes,
  Monitor,
  Settings
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const getIcon = (techName: string) => {
    const lowerName = techName.toLowerCase();
    
    switch (lowerName) {
      case 'react':
      case 'react native':
        return <Code2 className={`${className} text-blue-400`} />;
      case 'next.js':
        return <Globe className={`${className} text-white`} />;
      case 'typescript':
        return <FileCode className={`${className} text-blue-500`} />;
      case 'tailwindcss':
        return <Palette className={`${className} text-cyan-400`} />;
      case 'framer motion':
      case 'expo':
      case 'firebase':
        return <Zap className={`${className} text-yellow-400`} />;
      case 'node.js':
        return <Server className={`${className} text-green-500`} />;
      case 'express':
        return <Layers className={`${className} text-gray-400`} />;
      case 'postgresql':
      case 'mongodb':
        return <Database className={`${className} text-blue-600`} />;
      case 'redis':
      case 'docker':
        return <Boxes className={`${className} text-red-500`} />;
      case 'git':
        return <GitBranch className={`${className} text-orange-500`} />;
      case 'aws':
        return <Cloud className={`${className} text-orange-400`} />;
      case 'vercel':
        return <Globe className={`${className} text-black dark:text-white`} />;
      case 'flutter':
        return <Code2 className={`${className} text-blue-400`} />;
      default:
        return <Settings className={`${className} text-gray-400`} />;
    }
  };

  return getIcon(name);
}
