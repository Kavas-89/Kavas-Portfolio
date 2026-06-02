import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload, FiMoon, FiSun } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        <a href='#home' className='text-2xl font-bold text-gradient'>
          KAVAS V
        </a>

        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-slate-300 hover:text-white transition-colors'
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className='p-2 glass rounded-lg glass-hover'
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href='/resume.pdf'
            download
            className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg hover:opacity-90 transition-opacity'
          >
            <FiDownload />
            Resume
          </a>
        </div>

        <button
          className='md:hidden p-2'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden glass'
          >
            <div className='px-6 py-4 flex flex-col gap-4'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-slate-300 hover:text-white transition-colors'
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
