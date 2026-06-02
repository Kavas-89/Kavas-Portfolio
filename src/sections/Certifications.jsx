import { motion } from 'framer-motion'
import { FiAward, FiCalendar } from 'react-icons/fi'

export default function Certifications() {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2023',
      image: '🏆'
    },
    {
      title: 'Java Programming Masterclass',
      issuer: 'Udemy',
      date: '2022',
      image: '🏅'
    },
    {
      title: 'React Advanced Concepts',
      issuer: 'Pluralsight',
      date: '2022',
      image: '🎖️'
    },
    {
      title: 'Database Design & Development',
      issuer: 'LinkedIn Learning',
      date: '2021',
      image: '🏆'
    }
  ]

  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Certifications</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full' />
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className='glass rounded-2xl p-6 glass-hover text-center'
            >
              <div className='text-5xl mb-4'>{cert.image}</div>
              <div className='flex items-center justify-center gap-2 mb-2'>
                <FiAward className='text-primary' />
                <h3 className='font-bold'>{cert.title}</h3>
              </div>
              <p className='text-slate-400 mb-2'>{cert.issuer}</p>
              <div className='flex items-center justify-center gap-1 text-sm text-slate-500'>
                <FiCalendar />
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
