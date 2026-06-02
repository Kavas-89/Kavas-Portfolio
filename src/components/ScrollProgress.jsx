import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='fixed top-0 left-0 z-50 w-full h-1 bg-slate-800'>
      <motion.div
        className='h-full bg-gradient-to-r from-primary via-secondary to-accent'
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
      />
    </div>
  )
}
