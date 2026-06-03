import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Java Developer',
    'Full Stack Developer',
    'Problem Solver',
    'MERN Stack Developer'
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex])

  return (
    <section id='home' className='min-h-screen flex items-center pt-20'>
      <div className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6'>
            <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
            <span className='text-sm'>Available for hire</span>
          </div>

          <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
            Hi, I'm <span className='text-gradient'>Kavas V</span>
          </h1>

          <p className='text-2xl md:text-3xl text-slate-400 mb-8 h-12'>
            {texts[textIndex].substring(0, charIndex)}
            <span className='animate-pulse'>|</span>
          </p>

          <p className='text-slate-400 text-lg mb-8 max-w-lg'>
            Building robust, scalable, and user-friendly applications. Turning complex problems into elegant solutions.
          </p>

          <div className='flex flex-wrap gap-4 mb-8'>
            <a
              href='#contact'
              className='px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity'
            >
              Hire Me
            </a>
            <a
              href='#projects'
              className='px-8 py-3 glass rounded-lg font-semibold glass-hover'
            >
              View Projects
            </a>
            <a
              href='/resume.pdf'
              download
              className='px-8 py-3 glass rounded-lg font-semibold glass-hover'
            >
              Download Resume
            </a>
          </div>

          <div className='flex gap-4'>
            <a href='https://github.com/kavasvadivel' target='_blank' rel='noopener noreferrer' className='p-3 glass rounded-lg glass-hover'>
              <FiGithub className='w-6 h-6' />
            </a>
            <a href='https://linkedin.com/in/kavasvadivel' target='_blank' rel='noopener noreferrer' className='p-3 glass rounded-lg glass-hover'>
              <FiLinkedin className='w-6 h-6' />
            </a>
            <a href='mailto:kavasvadivel11@gmail.com' className='p-3 glass rounded-lg glass-hover'>
              <FiMail className='w-6 h-6' />
            </a>
            <a href='https://wa.me/918921793054' target='_blank' rel='noopener noreferrer' className='p-3 glass rounded-lg glass-hover'>
              <FaWhatsapp className='w-6 h-6' />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-30' />
          <div className='relative glass rounded-3xl p-8'>
            <div className='w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border border-white/10'>
              <img 
                src='/profile.JPG' 
                alt='Kavas V' 
                className='w-full h-full object-cover'
              />
            </div>
            <div className='mt-8 grid grid-cols-3 gap-4 text-center'>
              <div className='p-4 glass rounded-xl'>
                <p className='text-2xl font-bold text-gradient'>5+</p>
                <p className='text-slate-400 text-sm'>Projects</p>
              </div>
              <div className='p-4 glass rounded-xl'>
                <p className='text-2xl font-bold text-gradient'>3+</p>
                <p className='text-slate-400 text-sm'>Years</p>
              </div>
              <div className='p-4 glass rounded-xl'>
                <p className='text-2xl font-bold text-gradient'>20+</p>
                <p className='text-slate-400 text-sm'>Technologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
