import { motion } from 'framer-motion'

export default function About() {
  const achievements = [
    'Delivered 5+ enterprise-level applications',
    'Led development teams of 3-5 developers',
    'Improved application performance by 60%',
    'Built solutions used by 1000+ users'
  ]

  return (
    <section id='about' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>About Me</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full' />
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20' />
              <div className='relative glass rounded-3xl p-8'>
                <h3 className='text-2xl font-bold mb-4 text-gradient'>Professional Journey</h3>
                <p className='text-slate-400 mb-6 leading-relaxed'>
                  I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                  With a strong foundation in both frontend and backend technologies, I create seamless 
                  digital experiences that users love.
                </p>
                <p className='text-slate-400 mb-6 leading-relaxed'>
                  My journey in software development started with curiosity and has evolved into a deep 
                  commitment to writing clean, efficient, and maintainable code. I thrive on solving 
                  complex problems and turning ideas into reality.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-bold mb-6'>Key Achievements</h3>
            <div className='space-y-4'>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='flex items-start gap-4 p-4 glass rounded-xl glass-hover'
                >
                  <div className='w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <p className='text-slate-300'>{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
