import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Leading development of enterprise applications using React and Spring Boot. Mentoring junior developers and implementing best practices.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2022 - 2023',
      location: 'On-site',
      description: 'Developed web applications for multiple clients. Collaborated with designers and product managers to deliver high-quality solutions.'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Company',
      period: '2021 - 2022',
      location: 'Hybrid',
      description: 'Started my professional journey building web applications. Gained experience in full stack development and agile methodologies.'
    }
  ]

  return (
    <section id='experience' className='py-20'>
      <div className='max-w-4xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Experience</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full' />
        </motion.div>

        <div className='relative'>
          <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2' />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              <div className='hidden md:block w-1/2' />
              
              <div className='absolute left-8 md:left-1/2 w-4 h-4 bg-slate-950 border-4 border-primary rounded-full transform -translate-x-1/2 z-10' />
              
              <div className='w-full md:w-1/2 pl-20 md:pl-0 md:pr-12 md:text-right'>
                <div className='glass rounded-2xl p-6 glass-hover'>
                  <div className='flex items-center gap-2 mb-2 md:justify-end'>
                    <FiBriefcase className='text-primary' />
                    <h3 className='text-xl font-bold'>{exp.title}</h3>
                  </div>
                  <p className='text-gradient font-semibold mb-2'>{exp.company}</p>
                  <div className='flex items-center gap-4 mb-4 text-sm text-slate-400 md:justify-end'>
                    <span className='flex items-center gap-1'>
                      <FiCalendar />
                      {exp.period}
                    </span>
                    <span className='flex items-center gap-1'>
                      <FiMapPin />
                      {exp.location}
                    </span>
                  </div>
                  <p className='text-slate-400 md:text-left'>{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
