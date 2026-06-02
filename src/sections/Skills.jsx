import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FiCode,
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion']
    },
    {
      title: 'Backend',
      icon: FiServer,
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js']
    },
    {
      title: 'Database',
      icon: FiDatabase,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools',
      icon: FiTool,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    }
  ]

  return (
    <section id='skills' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Skills & Technologies</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full' />
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className='glass rounded-2xl p-6 glass-hover'
              >
                <div className='w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6'>
                  <Icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-4'>{category.title}</h3>
                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className='px-3 py-1.5 bg-white/5 rounded-full text-sm'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
