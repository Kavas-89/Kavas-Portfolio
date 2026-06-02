import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com' },
    { icon: FiLinkedin, href: 'https://linkedin.com' },
    { icon: FiMail, href: 'mailto:kavas@example.com' },
    { icon: FaWhatsapp, href: 'https://wa.me/1234567890' }
  ]

  return (
    <footer className='py-12 border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <a href='#home' className='text-3xl font-bold text-gradient inline-block mb-6'>
            KAVAS V
          </a>
          
          <p className='text-slate-400 mb-8 max-w-md mx-auto'>
            Full Stack Developer passionate about building exceptional digital experiences.
          </p>

          <div className='flex justify-center gap-4 mb-8'>
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 glass rounded-lg glass-hover'
                >
                  <Icon className='w-5 h-5' />
                </a>
              )
            })}
          </div>

          <div className='pt-8 border-t border-white/10 text-slate-500 text-sm'>
            <p>© {new Date().getFullYear()} Kavas V. All rights reserved.</p>
            <p className='mt-2 flex items-center justify-center gap-1'>
              Built with <FiCode className='w-4 h-4 text-primary' /> and lots of ☕
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
