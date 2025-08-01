'use client'

interface GridPatternProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function GridPattern({ 
  className = '', 
  size = 'md'
}: GridPatternProps) {
  const sizeClass = {
    sm: 'grid-pattern-sm',
    md: 'grid-pattern-md',
    lg: 'grid-pattern-lg'
  }[size]
  
  return (
    <div className={`fixed inset-0 pointer-events-none -z-20 ${sizeClass} ${className}`} />
  )
}
